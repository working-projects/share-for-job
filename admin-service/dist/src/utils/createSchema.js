"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederatedSchema = void 0;
const buildFederatedSchema_1 = require("./buildFederatedSchema");
const UserReference_1 = require("../modules/refrence/UserReference");
const PermissionReference_1 = require("../modules/refrence/PermissionReference");
const RoleReference_1 = require("../modules/refrence/RoleReference");
const PromoReference_1 = require("../modules/refrence/PromoReference");
exports.FederatedSchema = buildFederatedSchema_1.buildFederatedSchema({
    resolvers: [__dirname + "/../modules/**/*.ts", __dirname + "/../modules/**/*.js",],
}, {
    User: {
        __resolveReference: UserReference_1.resolveUserRefrence,
    },
    Permission: {
        __resolveReference: PermissionReference_1.resolvePermissionRefrence
    },
    Role: {
        __resolveReference: RoleReference_1.resolveRoleRerference
    },
    Promo: {
        __resolveReference: PromoReference_1.resolvePromoReference
    },
});
//# sourceMappingURL=createSchema.js.map