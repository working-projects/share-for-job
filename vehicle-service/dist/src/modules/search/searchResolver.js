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
exports.SearchResolver = void 0;
const type_graphql_1 = require("type-graphql");
const searchResult_1 = require("./types/searchResult");
const VehicleBrand_1 = require("../../entity/VehicleBrand");
const typeorm_1 = require("typeorm");
const searchAndPaginated_1 = require("../resolver_generate/types/searchAndPaginated");
const VehicleCategory_1 = require("../../entity/VehicleCategory");
const VehicleModel_1 = require("../../entity/VehicleModel");
const VehicleQuality_1 = require("../../entity/VehicleQuality");
const Vehicle_1 = require("../../entity/Vehicle");
let SearchResolver = class SearchResolver {
    searchVehicleBMCQ({ name, pageNumber, limit }) {
        return __awaiter(this, void 0, void 0, function* () {
            const barnds = yield VehicleBrand_1.VehicleBrand.find({ where: { name: typeorm_1.Like(`%${name}%`) }, skip: pageNumber, take: limit });
            const categories = yield VehicleCategory_1.VehicleCategory.find({ where: { name: typeorm_1.Like(`%${name}%`) }, skip: pageNumber, take: limit });
            const models = yield VehicleModel_1.VehicleModel.find({ where: { name: typeorm_1.Like(`%${name}%`) }, skip: pageNumber, take: limit });
            const qualities = yield VehicleQuality_1.VehicleQualityPrice.find({ where: { name: typeorm_1.Like(`%${name}%`) }, skip: pageNumber, take: limit });
            const vehicles = yield typeorm_1.getConnection()
                .getRepository(Vehicle_1.Vehicle)
                .createQueryBuilder("l")
                .orWhere("l.name ilike :name ", { name: `%${name}%` })
                .orWhere("l.color ilike :name ", { name: `%${name}%` })
                .orWhere("l.carNumber ilike :name ", { name: `%${name}%` })
                .orWhere("l.mfg_year ilike :name ", { name: `%${name}%` })
                .take(limit)
                .skip(pageNumber).getMany();
            return [...barnds, ...categories, ...models, ...qualities, ...vehicles];
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => [searchResult_1.SearchResultUnion]),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchAndPaginated_1.SearchAndPaginated]),
    __metadata("design:returntype", Promise)
], SearchResolver.prototype, "searchVehicleBMCQ", null);
SearchResolver = __decorate([
    type_graphql_1.Resolver()
], SearchResolver);
exports.SearchResolver = SearchResolver;
//# sourceMappingURL=searchResolver.js.map