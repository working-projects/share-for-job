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
exports.CliamCategoriesResolvers = void 0;
const type_graphql_1 = require("type-graphql");
const ClaimCategories_1 = require("../../../entity/ClaimCategories");
const input_1 = require("./input");
let CliamCategoriesResolvers = class CliamCategoriesResolvers {
    createCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield ClaimCategories_1.ClaimCategories.create(data).save();
            if (!category)
                throw new Error("Category create failed");
            return category;
        });
    }
    showCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield ClaimCategories_1.ClaimCategories.find({ where: { id } });
            if (!category)
                throw new Error("Category create failed");
            return category;
        });
    }
    updateCategory(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield ClaimCategories_1.ClaimCategories.createQueryBuilder().update(data).set(data).where("id = :id", { id: id }).execute();
            if (!category)
                throw new Error("Category update failed");
            return category;
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield ClaimCategories_1.ClaimCategories.delete({ id });
            if (!category)
                throw new Error("Category delete failed");
            return category;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => ClaimCategories_1.ClaimCategories),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_1.CategoryInput]),
    __metadata("design:returntype", Promise)
], CliamCategoriesResolvers.prototype, "createCategory", null);
__decorate([
    type_graphql_1.Query(() => ClaimCategories_1.ClaimCategories),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CliamCategoriesResolvers.prototype, "showCategory", null);
__decorate([
    type_graphql_1.Mutation(() => ClaimCategories_1.ClaimCategories),
    __param(0, type_graphql_1.Arg('id')), __param(1, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, input_1.CategoryInput]),
    __metadata("design:returntype", Promise)
], CliamCategoriesResolvers.prototype, "updateCategory", null);
__decorate([
    type_graphql_1.Mutation(() => ClaimCategories_1.ClaimCategories),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CliamCategoriesResolvers.prototype, "deleteCategory", null);
CliamCategoriesResolvers = __decorate([
    type_graphql_1.Resolver(ClaimCategories_1.ClaimCategories)
], CliamCategoriesResolvers);
exports.CliamCategoriesResolvers = CliamCategoriesResolvers;
//# sourceMappingURL=CliamCategoryResolvers.js.map