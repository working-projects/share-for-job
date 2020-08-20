"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAgencyResolver = exports.LoginDriverResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Driver_1 = require("../../entity/Driver");
const loginDriverResponse_1 = require("./types/loginDriverResponse");
const authTokens_1 = require("../agency/sheared/authTokens");
const tokenType_1 = require("../types/tokenType");
const bcrypt = __importStar(require("bcryptjs"));
const loginInput_1 = require("./types/loginInput");
const Agency_1 = require("../../entity/Agency");
const loginResponse_1 = require("../agency/sheared/loginResponse");
function CreateResolver(suffix, inputType, entity, returnType, middleware) {
    let BaseResolver = (() => {
        let BaseResolver = class BaseResolver {
            create({ phoneNumber, password }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const user = yield entity.findOne({ where: { phoneNumber } });
                    if (!user) {
                        throw new Error("User not Found");
                    }
                    const validPassword = yield bcrypt.compare(password, user.password);
                    if (!validPassword) {
                        throw new Error("The password doesn't match, try again!!");
                    }
                    const token = new tokenType_1.ADToken();
                    token.tokenType = 'Bearer';
                    token.accessToken = yield authTokens_1.createAccessToken(user);
                    token.refreshToken = yield authTokens_1.createRefreshToken(user);
                    return {
                        success: true,
                        message: "Login sucessfuly",
                        data: user,
                        token: token
                    };
                });
            }
        };
        __decorate([
            type_graphql_1.Mutation(() => returnType, { name: `login${suffix}` }),
            type_graphql_1.UseMiddleware(...(middleware || [])),
            __param(0, type_graphql_1.Arg("data", () => inputType)),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [loginInput_1.LoginInput]),
            __metadata("design:returntype", Promise)
        ], BaseResolver.prototype, "create", null);
        BaseResolver = __decorate([
            type_graphql_1.Resolver()
        ], BaseResolver);
        return BaseResolver;
    })();
    return BaseResolver;
}
exports.LoginDriverResolver = CreateResolver("Driver", loginInput_1.LoginInput, Driver_1.Driver, loginDriverResponse_1.LoginDriverResponseType, []);
exports.LoginAgencyResolver = CreateResolver("Agency", loginInput_1.LoginInput, Agency_1.Agency, loginResponse_1.LoginResponse, []);
//# sourceMappingURL=createLogin.js.map