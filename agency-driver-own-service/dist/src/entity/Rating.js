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
exports.ADRating = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Driver_1 = require("./Driver");
let ADRating = (() => {
    let ADRating = class ADRating extends typeorm_1.BaseEntity {
    };
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.ID),
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ADRating.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(() => type_graphql_1.Float),
        typeorm_1.Column("float"),
        __metadata("design:type", Number)
    ], ADRating.prototype, "ratingValue", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ADRating.prototype, "riderId", void 0);
    __decorate([
        type_graphql_1.Field(() => Driver_1.Driver),
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], ADRating.prototype, "driverId", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.CreateDateColumn({ name: 'createed_at' }),
        __metadata("design:type", Date)
    ], ADRating.prototype, "createdAt", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
        __metadata("design:type", Date)
    ], ADRating.prototype, "updatedAt", void 0);
    __decorate([
        type_graphql_1.Field(),
        typeorm_1.DeleteDateColumn({ name: 'deleted_at' }),
        __metadata("design:type", Date)
    ], ADRating.prototype, "deletedAt", void 0);
    __decorate([
        typeorm_1.ManyToOne(() => Driver_1.Driver, driver => driver.ratings, {
            cascade: true,
            onDelete: "CASCADE",
            nullable: true
        }),
        __metadata("design:type", Promise)
    ], ADRating.prototype, "driver", void 0);
    ADRating = __decorate([
        type_graphql_1.Directive(`@key(fields:"id")`),
        type_graphql_1.ObjectType(),
        typeorm_1.Entity("ratings")
    ], ADRating);
    return ADRating;
})();
exports.ADRating = ADRating;
//# sourceMappingURL=Rating.js.map