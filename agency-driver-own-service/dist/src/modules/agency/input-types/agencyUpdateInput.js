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
exports.UpdateAgencyInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let UpdateAgencyInput = (() => {
    let UpdateAgencyInput = class UpdateAgencyInput {
    };
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "company_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "company_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "first_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "last_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "profileImageUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "nidForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "nidBackUrl", void 0);
    __decorate([
        class_validator_1.Length(11, 11),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "phoneNumber", void 0);
    __decorate([
        class_validator_1.IsEmail(),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "email", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "present_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "permanent_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], UpdateAgencyInput.prototype, "city", void 0);
    __decorate([
        class_validator_1.Min(0),
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], UpdateAgencyInput.prototype, "latitude", void 0);
    __decorate([
        class_validator_1.Min(0),
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], UpdateAgencyInput.prototype, "longitude", void 0);
    UpdateAgencyInput = __decorate([
        type_graphql_1.InputType()
    ], UpdateAgencyInput);
    return UpdateAgencyInput;
})();
exports.UpdateAgencyInput = UpdateAgencyInput;
//# sourceMappingURL=agencyUpdateInput.js.map