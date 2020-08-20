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
exports.resolveUserRefrence = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../entity/User");
function resolveUserRefrence(reference) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield typeorm_1.getConnection().getRepository(User_1.User).findOne({ where: { id: reference.id } });
        if (!user) {
            throw new Error("User reference id invalid ");
        }
        return user;
    });
}
exports.resolveUserRefrence = resolveUserRefrence;
//# sourceMappingURL=UserReference.js.map