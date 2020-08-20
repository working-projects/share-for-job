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
exports.LoginResponse = void 0;
const type_graphql_1 = require("type-graphql");
const Agency_1 = require("../../../entity/Agency");
const tokenType_1 = require("../../types/tokenType");
let LoginResponse = (() => {
    let LoginResponse = class LoginResponse {
    };
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", Boolean)
    ], LoginResponse.prototype, "success", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], LoginResponse.prototype, "message", void 0);
    __decorate([
        type_graphql_1.Field(() => Agency_1.Agency),
        __metadata("design:type", Object)
    ], LoginResponse.prototype, "data", void 0);
    __decorate([
        type_graphql_1.Field(() => tokenType_1.ADToken),
        __metadata("design:type", tokenType_1.ADToken)
    ], LoginResponse.prototype, "token", void 0);
    LoginResponse = __decorate([
        type_graphql_1.ObjectType()
    ], LoginResponse);
    return LoginResponse;
})();
exports.LoginResponse = LoginResponse;
//# sourceMappingURL=loginResponse.js.map