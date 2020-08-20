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
exports.DeleteVehicleQuality = exports.DeleteVehicleCategory = exports.DeleteVehicle = exports.DeleteServicePrice = exports.DeleteServiceCategory = exports.DeleteModel = exports.DeleteBrand = void 0;
const VehicleBrand_1 = require("../../entity/VehicleBrand");
const type_graphql_1 = require("type-graphql");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const VehicleModel_1 = require("../../entity/VehicleModel");
const ServiceCategory_1 = require("../../entity/ServiceCategory");
const ServicePrice_1 = require("../../entity/ServicePrice");
const Vehicle_1 = require("../../entity/Vehicle");
const VehicleCategory_1 = require("../../entity/VehicleCategory");
const VehicleQuality_1 = require("../../entity/VehicleQuality");
const typeorm_1 = require("typeorm");
function CreateResolver(suffix, entity, middleware) {
    let BaseResolver = class BaseResolver {
        details(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const data = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(entity)
                    .where("id = :id", { id: id })
                    .execute();
                if (!data) {
                    throw new Error(`${suffix} Delete Did not sucessful `);
                }
                return true;
            });
        }
    };
    __decorate([
        type_graphql_1.Query(() => Boolean, { name: `delete${suffix}` }),
        type_graphql_1.UseMiddleware(...(middleware || [])),
        __param(0, type_graphql_1.Arg("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], BaseResolver.prototype, "details", null);
    BaseResolver = __decorate([
        type_graphql_1.Resolver()
    ], BaseResolver);
    return BaseResolver;
}
exports.DeleteBrand = CreateResolver("Brand", VehicleBrand_1.VehicleBrand, [isAuthMiddleware_1.isAuthMiddleware]);
exports.DeleteModel = CreateResolver("Model", VehicleModel_1.VehicleModel, [isAuthMiddleware_1.isAuthMiddleware]);
exports.DeleteServiceCategory = CreateResolver("ServiceCategory", ServiceCategory_1.ServiceCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.DeleteServicePrice = CreateResolver("ServicePrice", ServicePrice_1.ServicePrice, [isAuthMiddleware_1.isAuthMiddleware]);
exports.DeleteVehicle = CreateResolver("Vehicle", Vehicle_1.Vehicle, [isAuthMiddleware_1.isAuthMiddleware]);
exports.DeleteVehicleCategory = CreateResolver("VehicleCategory", VehicleCategory_1.VehicleCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.DeleteVehicleQuality = CreateResolver("VehicleQuality", VehicleQuality_1.VehicleQualityPrice, [isAuthMiddleware_1.isAuthMiddleware]);
//# sourceMappingURL=deleteResolver.js.map