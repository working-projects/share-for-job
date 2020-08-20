"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SENDER_TYPE = void 0;
const type_graphql_1 = require("type-graphql");
var SENDER_TYPE;
(function (SENDER_TYPE) {
    SENDER_TYPE["RIDER"] = "RIDER";
    SENDER_TYPE["DRIVER"] = "DRIVER";
    SENDER_TYPE["AGENCY"] = "AGENCY";
    SENDER_TYPE["GET_IN"] = "GET_IN";
})(SENDER_TYPE || (SENDER_TYPE = {}));
exports.SENDER_TYPE = SENDER_TYPE;
type_graphql_1.registerEnumType(SENDER_TYPE, {
    name: "SENDER_TYPE",
});
//# sourceMappingURL=SenderType.js.map