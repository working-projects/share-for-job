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
exports.RoleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Role_1 = require("../../../entity/Role");
const inputs_1 = require("./inputs");
const ServerError_1 = __importDefault(require("../../../errors/ServerError"));
const typeorm_1 = require("typeorm");
let RoleResolver = class RoleResolver {
    createRole(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield Role_1.Role.create(data).save();
            return role;
        });
    }
    findRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield Role_1.Role.getRepository().findOne({ where: { id: id } });
            if (!role)
                throw new Error("Role not found");
            return role;
        });
    }
    deleteRole(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield Role_1.Role.delete(id);
            if (!role)
                throw new ServerError_1.default("Could not delete", 500);
            return "Role Deleted Successfully";
        });
    }
    updateRole(id, { name, slug, status, group }) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(Role_1.Role)
                .set({
                name,
                slug,
                status,
                group,
            })
                .where("id = :id", { id })
                .execute();
            if (!role)
                throw new ServerError_1.default("Could not updated", 500);
            return "Role Deleted Successfully";
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Role_1.Role),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.RolesInputs]),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "createRole", null);
__decorate([
    type_graphql_1.Query(() => Role_1.Role),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "findRole", null);
__decorate([
    type_graphql_1.Mutation(() => Role_1.Role),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "deleteRole", null);
__decorate([
    type_graphql_1.Mutation(() => Role_1.Role),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, inputs_1.RolesInputs]),
    __metadata("design:returntype", Promise)
], RoleResolver.prototype, "updateRole", null);
RoleResolver = __decorate([
    type_graphql_1.Resolver(Role_1.Role)
], RoleResolver);
exports.RoleResolver = RoleResolver;
//# sourceMappingURL=RoleResolvers.js.map