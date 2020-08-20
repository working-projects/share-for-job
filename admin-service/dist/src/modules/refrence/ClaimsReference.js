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
exports.resolveClaimReference = void 0;
const typeorm_1 = require("typeorm");
const Claim_1 = require("../../entity/Claim");
function resolveClaimReference(reference) {
    return __awaiter(this, void 0, void 0, function* () {
        const claims = yield typeorm_1.getConnection().getRepository(Claim_1.Claim).findOne({ where: { id: reference.id } });
        if (!claims) {
            throw new Error("ClaimCategories reference id invalid");
        }
        return claims;
    });
}
exports.resolveClaimReference = resolveClaimReference;
//# sourceMappingURL=ClaimsReference.js.map