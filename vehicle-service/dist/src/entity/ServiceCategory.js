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
exports.ServiceCategory = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const ServicePrice_1 = require("./ServicePrice");
const statusEnumType_1 = require("../modules/types/statusEnumType");
let ServiceCategory = class ServiceCategory extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ServiceCategory.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceCategory.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ServiceCategory.prototype, "icon_url", void 0);
__decorate([
    type_graphql_1.Field(() => statusEnumType_1.Status),
    typeorm_1.Column("text", { default: "ACTIVE" }),
    __metadata("design:type", String)
], ServiceCategory.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'createed_at' }),
    __metadata("design:type", Date)
], ServiceCategory.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ServiceCategory.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
    __metadata("design:type", Date)
], ServiceCategory.prototype, "deletedAt", void 0);
__decorate([
    type_graphql_1.Field(() => [ServicePrice_1.ServicePrice]),
    typeorm_1.OneToMany(type => ServicePrice_1.ServicePrice, prices => prices.service),
    __metadata("design:type", Promise)
], ServiceCategory.prototype, "prices", void 0);
ServiceCategory = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity("service_categories")
], ServiceCategory);
exports.ServiceCategory = ServiceCategory;
//# sourceMappingURL=ServiceCategory.js.map