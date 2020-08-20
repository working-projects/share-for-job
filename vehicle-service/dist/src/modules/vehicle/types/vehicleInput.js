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
exports.VehicleInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let VehicleInput = class VehicleInput {
};
__decorate([
    class_validator_1.Length(1, 255, { message: "Enter Vehicle Name" }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "name", void 0);
__decorate([
    class_validator_1.Length(1, 255, { message: "Enter Vehicle Number" }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "carNumber", void 0);
__decorate([
    class_validator_1.Length(1, 255, { message: "Enter Vehicle Color" }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "color", void 0);
__decorate([
    class_validator_1.Min(1, { message: "Enter Vehicle CC" }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], VehicleInput.prototype, "cc", void 0);
__decorate([
    class_validator_1.Length(1, 255, { message: "Enter Vehicle year" }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "mfg_year", void 0);
__decorate([
    class_validator_1.Min(1, { message: "Enter how many Vehicle seat" }),
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], VehicleInput.prototype, "seats", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], VehicleInput.prototype, "car_imgUrl", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "regCertificateUrl", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "fitnessPaperUrl", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "taxTokenUrl", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], VehicleInput.prototype, "vehicleCartegoryId", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], VehicleInput.prototype, "vehicleQualityId", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], VehicleInput.prototype, "brandId", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], VehicleInput.prototype, "modelId", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], VehicleInput.prototype, "agencyId", void 0);
VehicleInput = __decorate([
    type_graphql_1.InputType()
], VehicleInput);
exports.VehicleInput = VehicleInput;
//# sourceMappingURL=vehicleInput.js.map