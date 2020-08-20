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
exports.ListAllVehicleQuality = exports.ListAllVehicleCategory = exports.ListAllVehicle = exports.ListAllServicePrice = exports.ListAllServiceCategory = exports.ListAllModel = exports.ListAllBrand = void 0;
const VehicleCategory_1 = require("./../../entity/VehicleCategory");
const Vehicle_1 = require("./../../entity/Vehicle");
const ServicePrice_1 = require("./../../entity/ServicePrice");
const VehicleBrand_1 = require("../../entity/VehicleBrand");
const type_graphql_1 = require("type-graphql");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const VehicleModel_1 = require("../../entity/VehicleModel");
const paginateInput_1 = require("./types/paginateInput");
const ServiceCategory_1 = require("../../entity/ServiceCategory");
const VehicleQuality_1 = require("../../entity/VehicleQuality");
function CreateResolver(suffix, returnType, entity, middleware) {
    let BaseResolver = class BaseResolver {
        list({ limit, pageNumber }) {
            return __awaiter(this, void 0, void 0, function* () {
                const datas = yield entity.find({ skip: pageNumber, take: limit, });
                if (!datas) {
                    throw new Error(`${suffix} data not found`);
                }
                return datas;
            });
        }
    };
    __decorate([
        type_graphql_1.Query(() => [returnType], { name: `list${suffix}` }),
        type_graphql_1.UseMiddleware(...(middleware || [])),
        __param(0, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [paginateInput_1.PaginatedInput]),
        __metadata("design:returntype", Promise)
    ], BaseResolver.prototype, "list", null);
    BaseResolver = __decorate([
        type_graphql_1.Resolver()
    ], BaseResolver);
    return BaseResolver;
}
exports.ListAllBrand = CreateResolver("Brand", VehicleBrand_1.VehicleBrand, VehicleBrand_1.VehicleBrand, [isAuthMiddleware_1.isAuthMiddleware]);
exports.ListAllModel = CreateResolver("Model", VehicleModel_1.VehicleModel, VehicleModel_1.VehicleModel, [isAuthMiddleware_1.isAuthMiddleware]);
exports.ListAllServiceCategory = CreateResolver("ServiceCategory", ServiceCategory_1.ServiceCategory, ServiceCategory_1.ServiceCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.ListAllServicePrice = CreateResolver("ServicePrice", ServicePrice_1.ServicePrice, ServicePrice_1.ServicePrice, [isAuthMiddleware_1.isAuthMiddleware]);
exports.ListAllVehicle = CreateResolver("Vehicle", Vehicle_1.Vehicle, Vehicle_1.Vehicle, [isAuthMiddleware_1.isAuthMiddleware]);
exports.ListAllVehicleCategory = CreateResolver("VehicleCategory", VehicleCategory_1.VehicleCategory, VehicleCategory_1.VehicleCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.ListAllVehicleQuality = CreateResolver("VehicleQuality", VehicleQuality_1.VehicleQualityPrice, VehicleQuality_1.VehicleQualityPrice, [isAuthMiddleware_1.isAuthMiddleware]);
//# sourceMappingURL=listResolver.js.map