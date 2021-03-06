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
exports.CreateBrandInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
const IsBrandNameExist_1 = require("../sheared/IsBrandNameExist");
let CreateBrandInput = class CreateBrandInput {
};
__decorate([
    class_validator_1.Length(1, 255),
    IsBrandNameExist_1.IsBrandAlreadyExist({ message: "This Brand Name is already use" }),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateBrandInput.prototype, "name", void 0);
CreateBrandInput = __decorate([
    type_graphql_1.InputType()
], CreateBrandInput);
exports.CreateBrandInput = CreateBrandInput;
//# sourceMappingURL=create_brand_input.js.map