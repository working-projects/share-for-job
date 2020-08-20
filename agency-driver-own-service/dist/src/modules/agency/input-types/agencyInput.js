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
exports.RegisterAgencyInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const isPhoneAlreadyExist_1 = require("../sheared/isPhoneAlreadyExist");
const isEmailAlreadyExist_1 = require("../sheared/isEmailAlreadyExist");
let RegisterAgencyInput = (() => {
    let RegisterAgencyInput = class RegisterAgencyInput {
    };
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "company_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "company_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "first_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "last_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "profileImageUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "nidForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "nidBackUrl", void 0);
    __decorate([
        class_validator_1.Length(11, 11),
        isPhoneAlreadyExist_1.IsPhoneAlreadyExist({ message: "Phone Number already use" }),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "phoneNumber", void 0);
    __decorate([
        class_validator_1.IsEmail(),
        isEmailAlreadyExist_1.IsEmailAlreadyExist({ message: "Email already use" }),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "email", void 0);
    __decorate([
        class_validator_1.Length(6, 20),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "password", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "present_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "permanent_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterAgencyInput.prototype, "city", void 0);
    __decorate([
        class_validator_1.Min(0),
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], RegisterAgencyInput.prototype, "latitude", void 0);
    __decorate([
        class_validator_1.Min(0),
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], RegisterAgencyInput.prototype, "longitude", void 0);
    RegisterAgencyInput = __decorate([
        type_graphql_1.InputType()
    ], RegisterAgencyInput);
    return RegisterAgencyInput;
})();
exports.RegisterAgencyInput = RegisterAgencyInput;
//# sourceMappingURL=agencyInput.js.map