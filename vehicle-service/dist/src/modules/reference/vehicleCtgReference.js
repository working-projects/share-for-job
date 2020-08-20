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
exports.resolveVehicleCtgRefernce = void 0;
const typeorm_1 = require("typeorm");
const VehicleCategory_1 = require("../../entity/VehicleCategory");
function resolveVehicleCtgRefernce(reference) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(reference.id);
        const data = yield typeorm_1.getConnection().getRepository(VehicleCategory_1.VehicleCategory).findOne({ where: { id: reference.id } });
        console.log(data);
        if (!data) {
            throw new Error("ServiceCategoryRerference id invalid ");
        }
        return data;
    });
}
exports.resolveVehicleCtgRefernce = resolveVehicleCtgRefernce;
//# sourceMappingURL=vehicleCtgReference.js.map