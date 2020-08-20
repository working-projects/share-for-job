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
exports.ImagesVehicleResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Vehicle_1 = require("../../entity/Vehicle");
const vehicleImage_1 = require("./types/vehicleImage");
let ImagesVehicleResolver = class ImagesVehicleResolver {
    images(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            const urls = new vehicleImage_1.VehicleImage();
            urls.car_img = vehicle.images.car_img;
            urls.regCertificate = vehicle.images.regCertificate;
            urls.fitnessPaper = vehicle.images.fitnessPaper;
            urls.taxToken = vehicle.images.taxToken;
            return urls;
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(() => vehicleImage_1.VehicleImage),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Vehicle_1.Vehicle]),
    __metadata("design:returntype", Promise)
], ImagesVehicleResolver.prototype, "images", null);
ImagesVehicleResolver = __decorate([
    type_graphql_1.Resolver(of => Vehicle_1.Vehicle)
], ImagesVehicleResolver);
exports.ImagesVehicleResolver = ImagesVehicleResolver;
//# sourceMappingURL=imageResolver.js.map