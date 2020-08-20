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
exports.RegisterOwnCarInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const isPhoneAlreadyExist_1 = require("../../agency/sheared/isPhoneAlreadyExist");
const isEmailAlreadyExist_1 = require("../../agency/sheared/isEmailAlreadyExist");
let RegisterOwnCarInput = (() => {
    let RegisterOwnCarInput = class RegisterOwnCarInput {
    };
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "company_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "company_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "first_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "last_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "profileImageUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "nidForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "nidBackUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "lisenseForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "lisenseBackUrl", void 0);
    __decorate([
        class_validator_1.Length(11, 11),
        type_graphql_1.Field(),
        isPhoneAlreadyExist_1.IsPhoneAlreadyExist({ message: "phone already use" }),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "phoneNumber", void 0);
    __decorate([
        class_validator_1.IsEmail(),
        type_graphql_1.Field(),
        isEmailAlreadyExist_1.IsEmailAlreadyExist({ message: "email already use" }),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "email", void 0);
    __decorate([
        class_validator_1.Length(6, 20),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "password", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "present_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "permanent_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterOwnCarInput.prototype, "city", void 0);
    __decorate([
        class_validator_1.Min(0),
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], RegisterOwnCarInput.prototype, "latitude", void 0);
    __decorate([
        class_validator_1.Min(0),
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], RegisterOwnCarInput.prototype, "longitude", void 0);
    RegisterOwnCarInput = __decorate([
        type_graphql_1.InputType()
    ], RegisterOwnCarInput);
    return RegisterOwnCarInput;
})();
exports.RegisterOwnCarInput = RegisterOwnCarInput;
//# sourceMappingURL=owncarInput.js.map