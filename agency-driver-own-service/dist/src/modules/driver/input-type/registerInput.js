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
exports.RegisterDriverInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const isPhoneAlreadyExist_1 = require("../sheared/isPhoneAlreadyExist");
let RegisterDriverInput = (() => {
    let RegisterDriverInput = class RegisterDriverInput {
    };
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "first_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "last_name", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "profileImageUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "nidForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "nidBackUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "lisenseForntUrl", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "lisenseBackUrl", void 0);
    __decorate([
        class_validator_1.Length(11, 11),
        isPhoneAlreadyExist_1.IsPhoneAlreadyExist({ message: "Phone Number already use" }),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "phoneNumber", void 0);
    __decorate([
        class_validator_1.Length(6, 20),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "password", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "present_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "permanent_address", void 0);
    __decorate([
        class_validator_1.Length(1, 255),
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterDriverInput.prototype, "city", void 0);
    RegisterDriverInput = __decorate([
        type_graphql_1.InputType()
    ], RegisterDriverInput);
    return RegisterDriverInput;
})();
exports.RegisterDriverInput = RegisterDriverInput;
//# sourceMappingURL=registerInput.js.map