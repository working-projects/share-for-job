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
exports.StatusUpdateVehicleQuality = exports.StatusUpdateVehicleCategory = exports.StatusUpdateVehicle = exports.StatusUpdateServicePrice = exports.StatusUpdateServiceCategory = exports.StatusUpdateModel = exports.StatusUpdateBrand = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const statusInput_1 = require("./types/statusInput");
const VehicleBrand_1 = require("../../entity/VehicleBrand");
const VehicleModel_1 = require("../../entity/VehicleModel");
const ServiceCategory_1 = require("../../entity/ServiceCategory");
const ServicePrice_1 = require("../../entity/ServicePrice");
const Vehicle_1 = require("../../entity/Vehicle");
const VehicleCategory_1 = require("../../entity/VehicleCategory");
const VehicleQuality_1 = require("../../entity/VehicleQuality");
function CreateResolver(suffix, inputType, entity, middleware) {
    let BaseResolver = class BaseResolver {
        create(data) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .update(entity)
                    .set({ status: data.status })
                    .where("id = :id", { id: data.userId })
                    .execute();
                if (!user) {
                    throw new Error(`${suffix} does not save`);
                }
                return true;
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => Boolean, { name: `updateStatus${suffix}` }),
        type_graphql_1.UseMiddleware(...(middleware || [])),
        __param(0, type_graphql_1.Arg("data", () => inputType)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BaseResolver.prototype, "create", null);
    BaseResolver = __decorate([
        type_graphql_1.Resolver()
    ], BaseResolver);
    return BaseResolver;
}
exports.StatusUpdateBrand = CreateResolver("Brand", statusInput_1.StatusInput, VehicleBrand_1.VehicleBrand, [isAuthMiddleware_1.isAuthMiddleware]);
exports.StatusUpdateModel = CreateResolver("Model", statusInput_1.StatusInput, VehicleModel_1.VehicleModel, [isAuthMiddleware_1.isAuthMiddleware]);
exports.StatusUpdateServiceCategory = CreateResolver("ServiceCategory", statusInput_1.StatusInput, ServiceCategory_1.ServiceCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.StatusUpdateServicePrice = CreateResolver("ServicePrice", statusInput_1.StatusInput, ServicePrice_1.ServicePrice, [isAuthMiddleware_1.isAuthMiddleware]);
exports.StatusUpdateVehicle = CreateResolver("Vehicle", statusInput_1.StatusInput, Vehicle_1.Vehicle, [isAuthMiddleware_1.isAuthMiddleware]);
exports.StatusUpdateVehicleCategory = CreateResolver("VehicleCategory", statusInput_1.StatusInput, VehicleCategory_1.VehicleCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.StatusUpdateVehicleQuality = CreateResolver("VehicleQuality", statusInput_1.StatusInput, VehicleQuality_1.VehicleQualityPrice, [isAuthMiddleware_1.isAuthMiddleware]);
//# sourceMappingURL=updateStatus.js.map