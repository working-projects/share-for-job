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
exports.Rating = void 0;
const Rider_1 = require("./Rider");
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let Rating = class Rating extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Rating.prototype, "id", void 0);
__decorate([
    class_validator_1.Min(0),
    type_graphql_1.Field(),
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", Number)
], Rating.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rating.prototype, "driverId", void 0);
__decorate([
    type_graphql_1.Field(() => Rider_1.Rider),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Rating.prototype, "riderId", void 0);
__decorate([
    type_graphql_1.Field(() => Rider_1.Rider),
    typeorm_1.ManyToOne(type => Rider_1.Rider, rider => rider.ratings),
    __metadata("design:type", Promise)
], Rating.prototype, "rider", void 0);
Rating = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Rating);
exports.Rating = Rating;
//# sourceMappingURL=Rating.js.map