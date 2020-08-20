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
exports.LoginResolver = void 0;
const type_graphql_1 = require("type-graphql");
const loginResponse_1 = require("../agency/sheared/loginResponse");
const loginInput_1 = require("../agency/input-types/loginInput");
const Agency_1 = require("../../entity/Agency");
const bcrypt = __importStar(require("bcryptjs"));
const authTokens_1 = require("../agency/sheared/authTokens");
const tokenType_1 = require("../types/tokenType");
const typeorm_1 = require("typeorm");
let LoginResolver = (() => {
    let LoginResolver = class LoginResolver {
        loginOwnCar({ phoneNumber, password }) {
            return __awaiter(this, void 0, void 0, function* () {
                const agency = yield Agency_1.Agency.findOne({ where: { phoneNumber } });
                if (!agency) {
                    throw new Error("User not Found");
                }
                const validPassword = yield bcrypt.compare(password, agency.password);
                if (!validPassword) {
                    throw new Error("The password doesn't match, try again!!");
                }
                if (!agency.isOwnACar) {
                    throw new Error("User not Found");
                }
                const token = new tokenType_1.ADToken();
                token.tokenType = 'Bearer';
                token.accessToken = yield authTokens_1.createAccessToken(agency);
                token.refreshToken = yield authTokens_1.createRefreshToken(agency);
                return {
                    success: true,
                    message: "Login sucessfuly",
                    data: agency,
                    token: token
                };
            });
        }
        revokeRefreshTokenForDriver(userId) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield typeorm_1.getConnection().getRepository(Agency_1.Agency).increment({ id: userId }, "tokenVersion", 1);
                    return true;
                }
                catch (error) {
                    console.log(error);
                    return false;
                }
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => loginResponse_1.LoginResponse),
        __param(0, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [loginInput_1.LoginAgencyInput]),
        __metadata("design:returntype", Promise)
    ], LoginResolver.prototype, "loginOwnCar", null);
    __decorate([
        type_graphql_1.Mutation(() => Boolean),
        __param(0, type_graphql_1.Arg('userId', () => String)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], LoginResolver.prototype, "revokeRefreshTokenForDriver", null);
    LoginResolver = __decorate([
        type_graphql_1.Resolver()
    ], LoginResolver);
    return LoginResolver;
})();
exports.LoginResolver = LoginResolver;
//# sourceMappingURL=loginResolver.js.map