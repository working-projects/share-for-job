"use strict";
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
exports.resolvePromoReference = void 0;
const typeorm_1 = require("typeorm");
const Promo_1 = require("../../entity/Promo");
function resolvePromoReference(reference) {
    return __awaiter(this, void 0, void 0, function* () {
        const claims = yield typeorm_1.getConnection().getRepository(Promo_1.Promo).findOne({ where: { id: reference.id } });
        if (!claims) {
            throw new Error("ClaimCategories reference id invalid");
        }
        return claims;
    });
}
exports.resolvePromoReference = resolvePromoReference;
//# sourceMappingURL=PromoReference.js.map