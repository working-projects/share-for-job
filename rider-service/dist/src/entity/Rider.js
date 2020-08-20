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
exports.Rider = void 0;
const Rating_1 = require("./Rating");
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const RiderImages_1 = require("../modules/resolvers/Rider/Input/RiderImages");
let Rider = class Rider extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Rider.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Rider.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Rider.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: 'text', unique: true, nullable: false }),
    __metadata("design:type", String)
], Rider.prototype, "phone", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Rider.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "date", nullable: true }),
    __metadata("design:type", Date)
], Rider.prototype, "dob", void 0);
__decorate([
    type_graphql_1.Field(() => RiderImages_1.RiderImage, { name: 'images' }),
    typeorm_1.Column('simple-json', { nullable: true }),
    __metadata("design:type", Object)
], Rider.prototype, "images", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "boolean", nullable: true }),
    __metadata("design:type", Boolean)
], Rider.prototype, "isActive", void 0);
__decorate([
    type_graphql_1.Field(() => [Rating_1.Rating]),
    typeorm_1.OneToMany(type => Rating_1.Rating, ratings => ratings.rider),
    __metadata("design:type", Promise)
], Rider.prototype, "ratings", void 0);
Rider = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Rider);
exports.Rider = Rider;
//# sourceMappingURL=Rider.js.map