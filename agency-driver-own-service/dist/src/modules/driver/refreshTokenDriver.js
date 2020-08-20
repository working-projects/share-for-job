"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.RefreshDriverTokenResolver = void 0;
const type_graphql_1 = require("type-graphql");
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("typeorm");
const tokenType_1 = require("../types/tokenType");
const authTokens_1 = require("../agency/sheared/authTokens");
const Driver_1 = require("../../entity/Driver");
let RefreshDriverTokenResolver = (() => {
    let RefreshDriverTokenResolver = class RefreshDriverTokenResolver {
        createDriverRefreshToken(token) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!token) {
                    throw new Error("Not Found any Token");
                }
                let payload = null;
                payload = jsonwebtoken_1.verify(token, process.env.SECRETREFRESH);
                if (!payload) {
                    throw new Error("The token Invalid");
                }
                const user = yield Driver_1.Driver.findOne({ id: payload.userId });
                if (!user) {
                    throw new Error("User not found");
                }
                if (user.tokenVersion !== payload.tokenVersion) {
                    const updateTokenVersion = yield typeorm_1.getConnection().getRepository(Driver_1.Driver).increment({ id: payload.userId }, "tokenVersion", 1);
                    if (updateTokenVersion) {
                        return {
                            tokenType: 'Bearer',
                            accessToken: yield authTokens_1.createAccessToken(user),
                            refreshToken: yield authTokens_1.createRefreshToken(user)
                        };
                    }
                    throw new Error("The token Invalid");
                }
                return {
                    tokenType: 'Bearer',
                    accessToken: yield authTokens_1.createAccessToken(user),
                    refreshToken: token
                };
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => tokenType_1.ADToken),
        __param(0, type_graphql_1.Arg("refreshToken")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], RefreshDriverTokenResolver.prototype, "createDriverRefreshToken", null);
    RefreshDriverTokenResolver = __decorate([
        type_graphql_1.Resolver()
    ], RefreshDriverTokenResolver);
    return RefreshDriverTokenResolver;
})();
exports.RefreshDriverTokenResolver = RefreshDriverTokenResolver;
//# sourceMappingURL=refreshTokenDriver.js.map