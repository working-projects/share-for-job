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
exports.PromosResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Promo_1 = require("../../../entity/Promo");
const types_1 = require("./types");
let PromosResolver = class PromosResolver {
    createPromoCode(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const promo = yield Promo_1.Promo.create(data).save();
            if (!promo)
                throw new Error("Sorry! sir I can not create your promo code");
            return promo;
        });
    }
    PromoFindById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promo = yield Promo_1.Promo.findOne(id);
            if (!promo)
                throw new Error("Sorry! provided id does not contain any promo code");
            return promo;
        });
    }
    PromosCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            const promo = yield Promo_1.Promo.find();
            if (!promo)
                throw new Error("Not data Found");
            return promo;
        });
    }
    FindByPromoCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const promo = yield Promo_1.Promo.findOne({ where: { promo_code: code } });
            if (!promo)
                throw new Error("Not data Found");
            return promo;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Promo_1.Promo),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.PromoInput]),
    __metadata("design:returntype", Promise)
], PromosResolver.prototype, "createPromoCode", null);
__decorate([
    type_graphql_1.Query(() => Promo_1.Promo),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.PromoInput]),
    __metadata("design:returntype", Promise)
], PromosResolver.prototype, "PromoFindById", null);
__decorate([
    type_graphql_1.Query(() => [Promo_1.Promo]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PromosResolver.prototype, "PromosCodes", null);
__decorate([
    type_graphql_1.Query(() => [Promo_1.Promo]),
    __param(0, type_graphql_1.Arg('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PromosResolver.prototype, "FindByPromoCode", null);
PromosResolver = __decorate([
    type_graphql_1.Resolver(Promo_1.Promo)
], PromosResolver);
exports.PromosResolver = PromosResolver;
//# sourceMappingURL=index.js.map