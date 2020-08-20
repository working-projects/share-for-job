"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORY = void 0;
const type_graphql_1 = require("type-graphql");
var CATEGORY;
(function (CATEGORY) {
    CATEGORY["RIDER"] = "RIDER";
    CATEGORY["DRIVER"] = "DRIVER";
    CATEGORY["AGENCY"] = "AGENCY";
    CATEGORY["GET_IN"] = "GET_IN";
})(CATEGORY || (CATEGORY = {}));
exports.CATEGORY = CATEGORY;
type_graphql_1.registerEnumType(CATEGORY, {
    name: "CATEGORY",
});
//# sourceMappingURL=ClaimCategoriesType.js.map