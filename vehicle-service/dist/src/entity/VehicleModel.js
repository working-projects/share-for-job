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
exports.VehicleModel = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const VehicleBrand_1 = require("./VehicleBrand");
const Vehicle_1 = require("./Vehicle");
let VehicleModel = class VehicleModel extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], VehicleModel.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], VehicleModel.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(() => statusEnumType_1.Status),
    typeorm_1.Column("text", { default: "ACTIVE" }),
    __metadata("design:type", String)
], VehicleModel.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'createed_at' }),
    __metadata("design:type", Date)
], VehicleModel.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], VehicleModel.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], VehicleModel.prototype, "deletedAt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], VehicleModel.prototype, "brandId", void 0);
__decorate([
    type_graphql_1.Field(() => VehicleBrand_1.VehicleBrand, { name: "brand" }),
    typeorm_1.ManyToOne(type => VehicleBrand_1.VehicleBrand, brand => brand.models, {
        cascade: true,
        onDelete: "CASCADE",
        nullable: true
    }),
    __metadata("design:type", Promise)
], VehicleModel.prototype, "brand", void 0);
__decorate([
    type_graphql_1.Field(() => [Vehicle_1.Vehicle]),
    typeorm_1.OneToMany(type => Vehicle_1.Vehicle, vehicles => vehicles.model),
    __metadata("design:type", Promise)
], VehicleModel.prototype, "vehicles", void 0);
VehicleModel = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("vehicles_models")
], VehicleModel);
exports.VehicleModel = VehicleModel;
//# sourceMappingURL=VehicleModel.js.map