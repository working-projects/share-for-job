"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchDriverResult = exports.SearchAgencyResult = void 0;
const type_graphql_1 = require("type-graphql");
const Agency_1 = require("../../../entity/Agency");
const Driver_1 = require("../../../entity/Driver");
exports.SearchAgencyResult = type_graphql_1.createUnionType({
    name: "SearchAgencyResult",
    types: () => [Agency_1.Agency],
});
exports.SearchDriverResult = type_graphql_1.createUnionType({
    name: "SearchAgencyResult",
    types: () => [Driver_1.Driver],
});
//# sourceMappingURL=agencySearchResult.js.map