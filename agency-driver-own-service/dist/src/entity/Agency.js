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
exports.Agency = void 0;
const typeorm_1 = require("typeorm");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const Driver_1 = require("./Driver");
const type_graphql_1 = require("type-graphql");
const agencyImages_1 = require("../modules/agency/sheared/agencyImages");
let Agency = (() => {
    let Agency = class Agency extends typeorm_1.BaseEntity {
    };
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.ID),
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Agency.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "company_name", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "company_address", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "first_name", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "last_name", void 0);
    __decorate([
        type_graphql_1.Field(() => agencyImages_1.AgencyImage, { name: "images" }),
        typeorm_1.Column("simple-json"),
        __metadata("design:type", Object)
    ], Agency.prototype, "images", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "phoneNumber", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "password", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "present_address", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "permanent_address", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Agency.prototype, "city", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Agency.prototype, "isOwnACar", void 0);
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.Float),
        typeorm_1.Column("float", { default: 0 }),
        __metadata("design:type", Number)
    ], Agency.prototype, "rating", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        typeorm_1.Column("float"),
        __metadata("design:type", Number)
    ], Agency.prototype, "latitude", void 0);
    __decorate([
        type_graphql_1.Field({ nullable: true }),
        typeorm_1.Column("float"),
        __metadata("design:type", Number)
    ], Agency.prototype, "longitude", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Agency.prototype, "isOnline", void 0);
    __decorate([
        type_graphql_1.Field(() => statusEnumType_1.Status),
        typeorm_1.Column("text", { default: "PENDING" }),
        __metadata("design:type", String)
    ], Agency.prototype, "status", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column("text", { default: "AGENCY" }),
        __metadata("design:type", String)
    ], Agency.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column("int", { default: 0 }),
        __metadata("design:type", Number)
    ], Agency.prototype, "tokenVersion", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.CreateDateColumn({ name: 'createed_at' }),
        __metadata("design:type", Date)
    ], Agency.prototype, "createdAt", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
        __metadata("design:type", Date)
    ], Agency.prototype, "updatedAt", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
        __metadata("design:type", Date)
    ], Agency.prototype, "deletedAt", void 0);
    __decorate([
        type_graphql_1.Field(() => [Driver_1.Driver]),
        typeorm_1.OneToMany(() => Driver_1.Driver, drivers => drivers.agency),
        __metadata("design:type", Promise)
    ], Agency.prototype, "drivers", void 0);
    Agency = __decorate([
        type_graphql_1.Directive(`@key(fields:"id")`),
        type_graphql_1.ObjectType(),
        typeorm_1.Entity()
    ], Agency);
    return Agency;
})();
exports.Agency = Agency;
//# sourceMappingURL=Agency.js.map