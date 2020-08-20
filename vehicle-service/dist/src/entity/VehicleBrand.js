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
exports.VehicleBrand = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const VehicleModel_1 = require("./VehicleModel");
const Vehicle_1 = require("./Vehicle");
let VehicleBrand = class VehicleBrand extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], VehicleBrand.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleBrand.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => statusEnumType_1.Status),
    typeorm_1.Column("text", { default: "ACTIVE" }),
    __metadata("design:type", String)
], VehicleBrand.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'createed_at' }),
    __metadata("design:type", Date)
], VehicleBrand.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], VehicleBrand.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], VehicleBrand.prototype, "deletedAt", void 0);
__decorate([
    type_graphql_1.Field(() => [VehicleModel_1.VehicleModel]),
    typeorm_1.OneToMany(type => VehicleModel_1.VehicleModel, models => models.brand),
    __metadata("design:type", Promise)
], VehicleBrand.prototype, "models", void 0);
__decorate([
    type_graphql_1.Field(() => [Vehicle_1.Vehicle]),
    typeorm_1.OneToMany(type => Vehicle_1.Vehicle, vehicles => vehicles.brand),
    __metadata("design:type", Promise)
], VehicleBrand.prototype, "vehicles", void 0);
VehicleBrand = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("vehicles_brands")
], VehicleBrand);
exports.VehicleBrand = VehicleBrand;
//# sourceMappingURL=VehicleBrand.js.map