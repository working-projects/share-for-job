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
exports.Vehicle = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Agency_1 = require("../modules/agency/Agency");
const VehicleCategory_1 = require("./VehicleCategory");
const Driver_1 = require("../modules/driver/Driver");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const VehicleBrand_1 = require("./VehicleBrand");
const VehicleModel_1 = require("./VehicleModel");
const VehicleQuality_1 = require("./VehicleQuality");
const vehicleImage_1 = require("../modules/vehicle/types/vehicleImage");
let Vehicle = class Vehicle extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Vehicle.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Vehicle.prototype, "carNumber", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Vehicle.prototype, "color", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Vehicle.prototype, "cc", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Vehicle.prototype, "mfg_year", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "seats", void 0);
__decorate([
    type_graphql_1.Field(() => vehicleImage_1.VehicleImage),
    typeorm_1.Column("simple-json"),
    __metadata("design:type", Object)
], Vehicle.prototype, "images", void 0);
__decorate([
    type_graphql_1.Field(() => statusEnumType_1.Status),
    typeorm_1.Column("text", { default: "PENDING" }),
    __metadata("design:type", String)
], Vehicle.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(() => Agency_1.Agency, { name: "agency" }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Vehicle.prototype, "agencyId", void 0);
__decorate([
    type_graphql_1.Field(() => Driver_1.Driver, { name: "driver" }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Vehicle.prototype, "driverId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "vehicleCategoryId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "vehicleQualityId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "brandId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Vehicle.prototype, "modelId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'createed_at' }),
    __metadata("design:type", Date)
], Vehicle.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Vehicle.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], Vehicle.prototype, "deletedAt", void 0);
__decorate([
    type_graphql_1.Field(() => VehicleCategory_1.VehicleCategory),
    typeorm_1.ManyToOne(type => VehicleCategory_1.VehicleCategory, vehicleCategory => vehicleCategory.vehicles, { onDelete: "SET NULL", nullable: true }),
    __metadata("design:type", Promise)
], Vehicle.prototype, "vehicleCategory", void 0);
__decorate([
    type_graphql_1.Field(() => VehicleQuality_1.VehicleQualityPrice, { name: "quality" }),
    typeorm_1.ManyToOne(type => VehicleQuality_1.VehicleQualityPrice, vehicleQuality => vehicleQuality.vehicles, { onDelete: "SET NULL", nullable: true }),
    __metadata("design:type", Promise)
], Vehicle.prototype, "vehicleQuality", void 0);
__decorate([
    type_graphql_1.Field(() => VehicleBrand_1.VehicleBrand),
    typeorm_1.ManyToOne(type => VehicleBrand_1.VehicleBrand, brand => brand.vehicles, { onDelete: "SET NULL", nullable: true }),
    __metadata("design:type", Promise)
], Vehicle.prototype, "brand", void 0);
__decorate([
    type_graphql_1.Field(() => VehicleModel_1.VehicleModel),
    typeorm_1.ManyToOne(type => VehicleModel_1.VehicleModel, model => model.vehicles, { onDelete: "SET NULL", nullable: true }),
    __metadata("design:type", Promise)
], Vehicle.prototype, "model", void 0);
Vehicle = __decorate([
    type_graphql_1.Directive(`@key(fields:"id")`),
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("vehicles")
], Vehicle);
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map