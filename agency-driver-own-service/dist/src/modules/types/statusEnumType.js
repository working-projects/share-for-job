"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const type_graphql_1 = require("type-graphql");
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
    Status["PENDING"] = "PENDING";
    Status["SUSPENDED"] = "SUSPENDED";
})(Status = exports.Status || (exports.Status = {}));
type_graphql_1.registerEnumType(Status, {
    name: "Status",
});
//# sourceMappingURL=statusEnumType.js.map