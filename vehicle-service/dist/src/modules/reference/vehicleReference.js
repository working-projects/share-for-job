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
exports.resolveVehicleRefernce = void 0;
const typeorm_1 = require("typeorm");
const Vehicle_1 = require("../../entity/Vehicle");
function resolveVehicleRefernce(reference) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(reference.id);
        const vehicle = yield typeorm_1.getConnection().getRepository(Vehicle_1.Vehicle).findOne({ where: { id: reference.id } });
        console.log(vehicle);
        if (!vehicle) {
            throw new Error("VehicleRerference id invalid ");
        }
        return vehicle;
    });
}
exports.resolveVehicleRefernce = resolveVehicleRefernce;
//# sourceMappingURL=vehicleReference.js.map