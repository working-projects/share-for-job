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
exports.Claim = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const SenderType_1 = require("../enums/SenderType");
const ClaimCategories_1 = require("./ClaimCategories");
let Claim = class Claim extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Claim.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Claim.prototype, "senderId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Claim.prototype, "file_url", void 0);
__decorate([
    type_graphql_1.Field(() => SenderType_1.SENDER_TYPE),
    typeorm_1.Column("text", { default: SenderType_1.SENDER_TYPE.RIDER }),
    __metadata("design:type", String)
], Claim.prototype, "sender_type", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Claim.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Claim.prototype, "details", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Claim.prototype, "created_at", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Claim.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Claim.prototype, "categoryId", void 0);
__decorate([
    type_graphql_1.Field(() => ClaimCategories_1.ClaimCategories),
    typeorm_1.ManyToOne(type => ClaimCategories_1.ClaimCategories, category => category.claim, {
        nullable: true,
        cascade: true,
        onDelete: "CASCADE"
    }),
    __metadata("design:type", Promise)
], Claim.prototype, "category", void 0);
Claim = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Claim);
exports.Claim = Claim;
//# sourceMappingURL=Claim.js.map