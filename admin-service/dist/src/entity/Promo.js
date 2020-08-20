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
exports.Promo = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
let Promo = class Promo extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Promo.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Promo.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Promo.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Promo.prototype, "promo_code", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('timestamp', { default: new Date() }),
    __metadata("design:type", Date)
], Promo.prototype, "create_at", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('timestamp', { nullable: false }),
    __metadata("design:type", Date)
], Promo.prototype, "exp_at", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('timestamp', { default: new Date() }),
    __metadata("design:type", Date)
], Promo.prototype, "updated_at", void 0);
Promo = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Promo);
exports.Promo = Promo;
//# sourceMappingURL=Promo.js.map