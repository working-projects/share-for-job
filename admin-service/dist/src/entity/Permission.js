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
exports.Permission = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
let Permission = class Permission extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Permission.prototype, "slug", void 0);
__decorate([
    type_graphql_1.Field(() => Boolean),
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Permission.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Permission.prototype, "group", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: new Date(), nullable: true }),
    __metadata("design:type", Date)
], Permission.prototype, "created_at", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: new Date(), nullable: true }),
    __metadata("design:type", Date)
], Permission.prototype, "updated_at", void 0);
Permission = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Permission);
exports.Permission = Permission;
//# sourceMappingURL=Permission.js.map