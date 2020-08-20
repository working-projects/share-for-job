"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederatedSchema = void 0;
const buildFederatedSchema_1 = require("./buildFederatedSchema");
const agencyReference_1 = require("../modules/reference/agencyReference");
const driverReference_1 = require("../modules/reference/driverReference");
exports.FederatedSchema = buildFederatedSchema_1.buildFederatedSchema({
    resolvers: [__dirname + "/../modules/**/*.ts"],
}, {
    Agency: {
        __resolveReference: agencyReference_1.resolveAgencyRefernce
    },
    Driver: {
        __resolveReference: driverReference_1.resolveDriverRefernce
    }
});
//# sourceMappingURL=createSchema.js.map