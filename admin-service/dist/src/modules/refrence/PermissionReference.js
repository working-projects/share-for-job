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
exports.resolvePermissionRefrence = void 0;
const typeorm_1 = require("typeorm");
const Permission_1 = require("../../entity/Permission");
function resolvePermissionRefrence(reference) {
    return __awaiter(this, void 0, void 0, function* () {
        const permission = yield typeorm_1.getConnection().getRepository(Permission_1.Permission).findOne({ where: { id: reference.id } });
        if (!permission) {
            throw new Error("permission reference id invalid");
        }
        return permission;
    });
}
exports.resolvePermissionRefrence = resolvePermissionRefrence;
//# sourceMappingURL=PermissionReference.js.map