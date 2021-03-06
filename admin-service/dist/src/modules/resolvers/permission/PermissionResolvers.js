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
exports.PermissionResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Permission_1 = require("../../../entity/Permission");
const inputs_1 = require("./inputs");
const ServerError_1 = __importDefault(require("../../../errors/ServerError"));
let PermissionResolver = class PermissionResolver {
    createPermission(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const permissions = yield Permission_1.Permission.create(data).save();
            return permissions;
        });
    }
    findPermission(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const permission = yield Permission_1.Permission.getRepository().findOne({
                where: { id: id },
            });
            return permission;
        });
    }
    deletePermission(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const permission = yield Permission_1.Permission.delete({ id });
            if (!permission)
                throw new ServerError_1.default("Could not delete", 500);
            return true;
        });
    }
    updatePermission(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const permission = yield Permission_1.Permission.createQueryBuilder()
                .update(data)
                .set(data)
                .where("id = :id", { id })
                .execute();
            if (!permission)
                throw new ServerError_1.default("Could not updated", 500);
            return permission;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Permission_1.Permission),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.PermissionInputs]),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "createPermission", null);
__decorate([
    type_graphql_1.Query(() => Permission_1.Permission),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "findPermission", null);
__decorate([
    type_graphql_1.Mutation(() => Permission_1.Permission),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "deletePermission", null);
__decorate([
    type_graphql_1.Mutation(() => Permission_1.Permission),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, inputs_1.PermissionInputs]),
    __metadata("design:returntype", Promise)
], PermissionResolver.prototype, "updatePermission", null);
PermissionResolver = __decorate([
    type_graphql_1.Resolver(Permission_1.Permission)
], PermissionResolver);
exports.PermissionResolver = PermissionResolver;
//# sourceMappingURL=PermissionResolvers.js.map