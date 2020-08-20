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
exports.ServicePrice = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const ServiceCategory_1 = require("./ServiceCategory");
const VehicleQuality_1 = require("./VehicleQuality");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const RangeEnumType_1 = require("../modules/types/RangeEnumType");
let ServicePrice = class ServicePrice extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ServicePrice.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    typeorm_1.Column("float", { default: 0 }),
    __metadata("design:type", Number)
], ServicePrice.prototype, "bodyPrice", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    typeorm_1.Column("float", { default: 0 }),
    __metadata("design:type", Number)
], ServicePrice.prototype, "bodyPriceWithDriver", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    typeorm_1.Column("float", { default: 0 }),
    __metadata("design:type", Number)
], ServicePrice.prototype, "minPrice", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Float),
    typeorm_1.Column("float", { default: 0 }),
    __metadata("design:type", Number)
], ServicePrice.prototype, "kmPrice", void 0);
__decorate([
    type_graphql_1.Field(() => RangeEnumType_1.RangeArea),
    typeorm_1.Column("text", { default: "ALL" }),
    __metadata("design:type", String)
], ServicePrice.prototype, "range", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ServicePrice.prototype, "serviceId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ServicePrice.prototype, "vehicleQualityId", void 0);
__decorate([
    type_graphql_1.Field(() => statusEnumType_1.Status),
    typeorm_1.Column("text", { default: "ACTIVE" }),
    __metadata("design:type", String)
], ServicePrice.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(() => ServiceCategory_1.ServiceCategory, { name: "serviceCategory" }),
    typeorm_1.ManyToOne(type => ServiceCategory_1.ServiceCategory, service => service.prices, { onDelete: "SET NULL", nullable: true }),
    __metadata("design:type", Promise)
], ServicePrice.prototype, "service", void 0);
__decorate([
    type_graphql_1.Field(() => VehicleQuality_1.VehicleQualityPrice, { name: "quality" }),
    typeorm_1.ManyToOne(type => VehicleQuality_1.VehicleQualityPrice, vehicleQuality => vehicleQuality.prices, { onDelete: "SET NULL", nullable: true }),
    __metadata("design:type", Promise)
], ServicePrice.prototype, "vehicleQuality", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'createed_at' }),
    __metadata("design:type", Date)
], ServicePrice.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ServicePrice.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], ServicePrice.prototype, "deletedAt", void 0);
ServicePrice = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("service_prices")
], ServicePrice);
exports.ServicePrice = ServicePrice;
//# sourceMappingURL=ServicePrice.js.map