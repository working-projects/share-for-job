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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverUpdateInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let DriverUpdateInput = (() => {
    let DriverUpdateInput = class DriverUpdateInput {
    };
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "first_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "last_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "profileImageUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "nidForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "nidBackUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "lisenseForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "lisenseBackUrl", void 0);
    __decorate([
        class_validator_1.Length(11, 11),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "phoneNumber", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "present_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "permanent_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "city", void 0);
    __decorate([
        class_validator_1.Length(1, 100),
        type_graphql_1.Field(() => type_graphql_1.ID),
        __metadata("design:type", String)
    ], DriverUpdateInput.prototype, "agencyId", void 0);
    DriverUpdateInput = __decorate([
        type_graphql_1.InputType()
    ], DriverUpdateInput);
    return DriverUpdateInput;
})();
exports.DriverUpdateInput = DriverUpdateInput;
//# sourceMappingURL=updateDriverInput.js.map