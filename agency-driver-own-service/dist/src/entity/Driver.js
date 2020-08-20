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
exports.Driver = void 0;
const typeorm_1 = require("typeorm");
const statusEnumType_1 = require("../modules/types/statusEnumType");
const Agency_1 = require("./Agency");
const type_graphql_1 = require("type-graphql");
const driverImage_1 = require("../modules/driver/sheared/driverImage");
const Rating_1 = require("./Rating");
let Driver = (() => {
    let Driver = class Driver extends typeorm_1.BaseEntity {
    };
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.ID),
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Driver.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Driver.prototype, "first_name", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Driver.prototype, "last_name", void 0);
    __decorate([
        type_graphql_1.Field(() => driverImage_1.DriverImage),
        typeorm_1.Column("simple-json"),
        __metadata("design:type", Object)
    ], Driver.prototype, "images", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Driver.prototype, "phoneNumber", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Driver.prototype, "password", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Driver.prototype, "present_address", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Driver.prototype, "permanent_address", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Driver.prototype, "city", void 0);
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.Float),
        typeorm_1.Column("float", { default: 0 }),
        __metadata("design:type", Number)
    ], Driver.prototype, "rating", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Driver.prototype, "isOnline", void 0);
    __decorate([
        type_graphql_1.Field(() => statusEnumType_1.Status),
        typeorm_1.Column("text", { default: "PENDING" }),
        __metadata("design:type", String)
    ], Driver.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column("int", { default: 0 }),
        __metadata("design:type", Number)
    ], Driver.prototype, "tokenVersion", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column("text", { default: "DRIVER" }),
        __metadata("design:type", String)
    ], Driver.prototype, "role", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.CreateDateColumn({ name: 'createed_at' }),
        __metadata("design:type", Date)
    ], Driver.prototype, "createdAt", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
        __metadata("design:type", Date)
    ], Driver.prototype, "updatedAt", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
        __metadata("design:type", Date)
    ], Driver.prototype, "deletedAt", void 0);
    __decorate([
        type_graphql_1.Field(() => Agency_1.Agency),
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Driver.prototype, "agencyId", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Agency_1.Agency, agency => agency.drivers, {
            onDelete: "SET NULL",
            nullable: true
        }),
        __metadata("design:type", Promise)
    ], Driver.prototype, "agency", void 0);
    __decorate([
        type_graphql_1.Field(() => [Rating_1.ADRating]),
        typeorm_1.OneToMany(() => Rating_1.ADRating, ratings => ratings.driver),
        __metadata("design:type", Promise)
    ], Driver.prototype, "ratings", void 0);
    Driver = __decorate([
        type_graphql_1.ObjectType(),
        type_graphql_1.Directive(`@key(fields:"id")`),
        typeorm_1.Entity()
    ], Driver);
    return Driver;
})();
exports.Driver = Driver;
//# sourceMappingURL=Driver.js.map