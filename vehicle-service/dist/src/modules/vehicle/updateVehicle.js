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
exports.UpdateVehicleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Vehicle_1 = require("../../entity/Vehicle");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const vehicleInput_1 = require("./types/vehicleInput");
let UpdateVehicleResolver = class UpdateVehicleResolver {
    updateVehicle(id, { name, carNumber, color, cc, mfg_year, seats, brandId, modelId, vehicleCartegoryId, vehicleQualityId, car_imgUrl, regCertificateUrl, fitnessPaperUrl, taxTokenUrl, agencyId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicle = yield Vehicle_1.Vehicle.findOne({ where: { id } });
            if (!vehicle)
                throw new Error("driver not found!");
            Object.assign(vehicle, {
                name,
                carNumber,
                color,
                cc,
                mfg_year,
                images: { car_img: car_imgUrl, regCertificate: regCertificateUrl, fitnessPaper: fitnessPaperUrl, taxToken: taxTokenUrl },
                seats,
                brandId,
                modelId,
                vehicleCartegoryId,
                vehicleQualityId,
                agencyId
            });
            yield vehicle.save();
            return vehicle;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Vehicle_1.Vehicle),
    type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
    __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, vehicleInput_1.VehicleInput]),
    __metadata("design:returntype", Promise)
], UpdateVehicleResolver.prototype, "updateVehicle", null);
UpdateVehicleResolver = __decorate([
    type_graphql_1.Resolver()
], UpdateVehicleResolver);
exports.UpdateVehicleResolver = UpdateVehicleResolver;
//# sourceMappingURL=updateVehicle.js.map