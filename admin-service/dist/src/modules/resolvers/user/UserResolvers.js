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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../../entity/User");
const inputs_1 = require("./inputs");
const bcryptjs_1 = require("bcryptjs");
const TokenType_1 = require("./type/TokenType");
const loginInputs_1 = require("./inputs/loginInputs");
const config_1 = require("../../../config");
const ServerError_1 = __importDefault(require("../../../errors/ServerError"));
const AuthMiddleware_1 = require("../../../modules/middleware/AuthMiddleware");
const RoleAssignType_1 = require("../role/inputs/RoleAssignType");
const permissionAssignType_1 = require("../permission/inputs/permissionAssignType");
const Permission_1 = require("../../../entity/Permission");
const Role_1 = require("../../../entity/Role");
let UserResolver = class UserResolver {
    users() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.find({ relations: ['roles', 'permissions'] });
            if (!user)
                throw new Error("Not user founded");
            return user;
        });
    }
    user(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { id }, relations: ['roles', 'permissions'] });
            if (!user)
                throw new Error("Provider user id is not exist");
            return user;
        });
    }
    register({ firstName, lastName, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcryptjs_1.hash(password, 12);
            const user = yield User_1.User.getRepository()
                .create({ firstName, lastName, email, password: hashedPassword })
                .save();
            return user;
        });
    }
    login(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            const login = yield User_1.User.findOne({ where: { email: data.email }, relations: ['roles', 'permissions'] });
            if (login) {
                const isValidPassword = yield bcryptjs_1.compare(data.password, login.password);
                if (!isValidPassword)
                    throw new ServerError_1.default("Unauthorized", 401);
                const tokenResponse = new TokenType_1.TokenResponse();
                delete login.password;
                tokenResponse.ACCESS_TOKEN = config_1.accessToken(Object.assign({}, login));
                tokenResponse.REFRESH_TOKEN = config_1.refreshToken({ id: login.id });
                return tokenResponse;
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.delete({ id });
            if (!user)
                throw new Error("Delete fail");
            if (user)
                return true;
        });
    }
    assignRole(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.User.findOneOrFail({ where: { id: data.userId }, relations: ["roles"] });
                const role = yield Role_1.Role.findOneOrFail({ where: { id: data.roleId } });
                user.roles = [role];
                yield user.save();
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    assignPermission(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.User.findOneOrFail({ where: { id: data.userId }, relations: ['permissions'] });
                const permission = yield Permission_1.Permission.findOneOrFail({ where: { id: data.permissionId } });
                user.permissions = [permission];
                yield user.save();
                if (user)
                    return true;
            }
            catch (error) {
                return false;
            }
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(AuthMiddleware_1.hasPermission('admin', 'user', 'user')),
    type_graphql_1.Query(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    type_graphql_1.Query(() => User_1.User),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "user", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    type_graphql_1.Mutation(() => TokenType_1.TokenResponse),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginInputs_1.LoginInputs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RoleAssignType_1.RoleAssignType]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "assignRole", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [permissionAssignType_1.PermissionAssignType]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "assignPermission", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(User_1.User)
], UserResolver);
exports.default = UserResolver;
//# sourceMappingURL=UserResolvers.js.map