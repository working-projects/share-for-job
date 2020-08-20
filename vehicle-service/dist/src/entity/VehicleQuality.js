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
exports.VehicleQualityPrice = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const ServicePrice_1 = require("./ServicePrice");
const Vehicle_1 = require("./Vehicle");
const VehicleCategory_1 = require("./VehicleCategory");
let VehicleQualityPrice = class VehicleQualityPrice extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], VehicleQualityPrice.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleQualityPrice.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleQualityPrice.prototype, "icon_active_url", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleQualityPrice.prototype, "icon_inactive_url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], VehicleQualityPrice.prototype, "priceId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], VehicleQualityPrice.prototype, "categoryId", void 0);
__decorate([
    type_graphql_1.Field(() => statusEnumType_1.Status),
    typeorm_1.Column("text", { default: "ACTIVE" }),
    __metadata("design:type", String)
], VehicleQualityPrice.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'createed_at' }),
    __metadata("design:type", Date)
], VehicleQualityPrice.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], VehicleQualityPrice.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], VehicleQualityPrice.prototype, "deletedAt", void 0);
__decorate([
    type_graphql_1.Field(() => [ServicePrice_1.ServicePrice]),
    typeorm_1.OneToMany(type => ServicePrice_1.ServicePrice, prices => prices.vehicleQuality),
    __metadata("design:type", Promise)
], VehicleQualityPrice.prototype, "prices", void 0);
__decorate([
    type_graphql_1.Field(() => VehicleCategory_1.VehicleCategory),
    typeorm_1.ManyToOne(type => VehicleCategory_1.VehicleCategory, cartegory => cartegory.qualities, {
        onDelete: "SET NULL",
        nullable: true
    }),
    __metadata("design:type", Promise)
], VehicleQualityPrice.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(() => [Vehicle_1.Vehicle]),
    typeorm_1.OneToMany(type => Vehicle_1.Vehicle, vehicles => vehicles.vehicleQuality),
    __metadata("design:type", Promise)
], VehicleQualityPrice.prototype, "vehicles", void 0);
VehicleQualityPrice = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("vehicle_quality")
], VehicleQualityPrice);
exports.VehicleQualityPrice = VehicleQualityPrice;
//# sourceMappingURL=VehicleQuality.js.map