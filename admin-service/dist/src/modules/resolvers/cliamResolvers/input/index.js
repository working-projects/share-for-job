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
exports.ClaimsInput = void 0;
const type_graphql_1 = require("type-graphql");
const SenderType_1 = require("../../../../enums/SenderType");
let ClaimsInput = class ClaimsInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ClaimsInput.prototype, "senderId", void 0);
__decorate([
    type_graphql_1.Field(() => SenderType_1.SENDER_TYPE),
    __metadata("design:type", String)
], ClaimsInput.prototype, "sender_type", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ClaimsInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ClaimsInput.prototype, "details", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ClaimsInput.prototype, "categoryId", void 0);
ClaimsInput = __decorate([
    type_graphql_1.InputType()
], ClaimsInput);
exports.ClaimsInput = ClaimsInput;
//# sourceMappingURL=index.js.map