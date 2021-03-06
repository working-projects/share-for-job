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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDriver = void 0;
const type_graphql_1 = require("type-graphql");
const createResponse_1 = require("./createResponse");
const Driver_1 = require("../../entity/Driver");
const registerInput_1 = require("../driver/input-type/registerInput");
function CreateResolver(suffix, inputType, entity, middleware) {
    let BaseResolver = (() => {
        let BaseResolver = class BaseResolver {
            create(data) {
                return __awaiter(this, void 0, void 0, function* () {
                    const user = yield entity.create(data).save();
                    if (!user) {
                        throw new Error(`${suffix} does not save`);
                    }
                    return {
                        success: true,
                        message: "Save Successfuly"
                    };
                });
            }
        };
        __decorate([
            type_graphql_1.Mutation(() => createResponse_1.CreateResponse, { name: `create${suffix}` }),
            type_graphql_1.UseMiddleware(...(middleware || [])),
            __param(0, type_graphql_1.Arg("data", () => inputType)),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", Promise)
        ], BaseResolver.prototype, "create", null);
        BaseResolver = __decorate([
            type_graphql_1.Resolver()
        ], BaseResolver);
        return BaseResolver;
    })();
    return BaseResolver;
}
exports.RegisterDriver = CreateResolver("Driver", registerInput_1.RegisterDriverInput, Driver_1.Driver, []);
//# sourceMappingURL=createUser.js.map