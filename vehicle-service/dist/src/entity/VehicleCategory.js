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
exports.VehicleCategory = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const Vehicle_1 = require("./Vehicle");
const VehicleQuality_1 = require("./VehicleQuality");
let VehicleCategory = class VehicleCategory extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], VehicleCategory.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleCategory.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], VehicleCategory.prototype, "seat", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleCategory.prototype, "icon_active_url", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleCategory.prototype, "icon_inactive_url", void 0);
__decorate([
    type_graphql_1.Field(() => statusEnumType_1.Status),
    typeorm_1.Column("text", { default: "ACTIVE" }),
    __metadata("design:type", String)
], VehicleCategory.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'createed_at' }),
    __metadata("design:type", Date)
], VehicleCategory.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], VehicleCategory.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], VehicleCategory.prototype, "deletedAt", void 0);
__decorate([
    type_graphql_1.Field(() => [VehicleQuality_1.VehicleQualityPrice]),
    typeorm_1.OneToMany(type => VehicleQuality_1.VehicleQualityPrice, qualities => qualities.category),
    __metadata("design:type", Promise)
], VehicleCategory.prototype, "qualities", void 0);
__decorate([
    type_graphql_1.Field(() => [Vehicle_1.Vehicle]),
    typeorm_1.OneToMany(type => Vehicle_1.Vehicle, vehicles => vehicles.vehicleCategory),
    __metadata("design:type", Promise)
], VehicleCategory.prototype, "vehicles", void 0);
VehicleCategory = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("vehicle_categories")
], VehicleCategory);
exports.VehicleCategory = VehicleCategory;
//# sourceMappingURL=VehicleCategory.js.map