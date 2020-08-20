"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederatedSchema = void 0;
const buildFederatedSchema_1 = require("./buildFederatedSchema");
const vehicleReference_1 = require("../modules/reference/vehicleReference");
const serviceCtgReference_1 = require("../modules/reference/serviceCtgReference");
const servicePriceReference_1 = require("../modules/reference/servicePriceReference");
const vehicleCtgReference_1 = require("../modules/reference/vehicleCtgReference");
const vehicleQualityReference_1 = require("../modules/reference/vehicleQualityReference");
exports.FederatedSchema = buildFederatedSchema_1.buildFederatedSchema({
    resolvers: [__dirname + "/../modules/**/*.ts"],
}, {
    Vehicle: {
        __resolveReference: vehicleReference_1.resolveVehicleRefernce,
        agency(vehicle) {
            return { __typename: "Agency", id: vehicle.agencyId };
        },
        driver(vehicle) {
            return { __typename: "Driver", id: vehicle.driverId };
        },
    },
    ServiceCategory: {
        __resolveReference: serviceCtgReference_1.resolveServiceCtgRefernce
    },
    ServicePrice: {
        __resolveReference: servicePriceReference_1.resolveServicePriceRefernce
    },
    VehicleCategory: {
        __resolveReference: vehicleCtgReference_1.resolveVehicleCtgRefernce
    },
    VehicleQualityPrice: {
        __resolveReference: vehicleQualityReference_1.resolveVehicleQualityRefernce
    },
});
//# sourceMappingURL=createSchema.js.map