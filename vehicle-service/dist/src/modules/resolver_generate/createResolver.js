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
exports.CreateVehicleQuality = exports.CreateVehicleCategory = exports.CreateServicePrice = exports.CreateServiceCategory = exports.CreateModle = exports.CreateBrand = void 0;
const VehicleBrand_1 = require("../../entity/VehicleBrand");
const type_graphql_1 = require("type-graphql");
const create_brand_input_1 = require("./types/create_brand_input");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const create_model_input_1 = require("./types/create_model_input");
const VehicleModel_1 = require("../../entity/VehicleModel");
const create_scategory_input_1 = require("./types/create_scategory_input");
const ServiceCategory_1 = require("../../entity/ServiceCategory");
const create_sprice_1 = require("./types/create_sprice");
const ServicePrice_1 = require("../../entity/ServicePrice");
const create_v_category_input_1 = require("./types/create_v_category_input");
const VehicleCategory_1 = require("../../entity/VehicleCategory");
const create_quality_1 = require("./types/create_quality");
const VehicleQuality_1 = require("../../entity/VehicleQuality");
const typeorm_1 = require("typeorm");
function CreateResolver(suffix, inputType, entity, middleware) {
    let BaseResolver = class BaseResolver {
        create(data) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield typeorm_1.getConnection()
                    .createQueryBuilder()
                    .insert()
                    .into(entity)
                    .values(Object.assign({}, data))
                    .execute();
                if (!user) {
                    throw new Error(`${suffix} does not save`);
                }
                return true;
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => Boolean, { name: `create${suffix}` }),
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
exports.CreateBrand = CreateResolver("Brand", create_brand_input_1.CreateBrandInput, VehicleBrand_1.VehicleBrand, [isAuthMiddleware_1.isAuthMiddleware]);
exports.CreateModle = CreateResolver("Model", create_model_input_1.CreateModelInput, VehicleModel_1.VehicleModel, [isAuthMiddleware_1.isAuthMiddleware]);
exports.CreateServiceCategory = CreateResolver("ServiceCategory", create_scategory_input_1.ServiceCategoryInput, ServiceCategory_1.ServiceCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.CreateServicePrice = CreateResolver("ServicePrice", create_sprice_1.ServicePriceInput, ServicePrice_1.ServicePrice, [isAuthMiddleware_1.isAuthMiddleware]);
exports.CreateVehicleCategory = CreateResolver("VehicleCategory", create_v_category_input_1.VehicleCategoryInput, VehicleCategory_1.VehicleCategory, [isAuthMiddleware_1.isAuthMiddleware]);
exports.CreateVehicleQuality = CreateResolver("VehicleQuality", create_quality_1.VehicleQualityInput, VehicleQuality_1.VehicleQualityPrice, [isAuthMiddleware_1.isAuthMiddleware]);
//# sourceMappingURL=createResolver.js.map