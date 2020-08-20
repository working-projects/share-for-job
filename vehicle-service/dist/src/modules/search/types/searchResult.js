"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResultUnion = void 0;
const type_graphql_1 = require("type-graphql");
const VehicleBrand_1 = require("../../../entity/VehicleBrand");
const VehicleCategory_1 = require("../../../entity/VehicleCategory");
const VehicleModel_1 = require("../../../entity/VehicleModel");
const VehicleQuality_1 = require("../../../entity/VehicleQuality");
const Vehicle_1 = require("../../../entity/Vehicle");
exports.SearchResultUnion = type_graphql_1.createUnionType({
    name: "SearchResult",
    types: () => [VehicleBrand_1.VehicleBrand, VehicleCategory_1.VehicleCategory, VehicleModel_1.VehicleModel, VehicleQuality_1.VehicleQualityPrice, Vehicle_1.Vehicle],
});
//# sourceMappingURL=searchResult.js.map