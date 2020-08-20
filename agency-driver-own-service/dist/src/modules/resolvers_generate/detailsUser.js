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
exports.DetailsAgencyResolver = exports.DetailsDriverResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Driver_1 = require("../../entity/Driver");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const Agency_1 = require("../../entity/Agency");
const detailsAgency_1 = require("./types/detailsAgency");
const detailsDriver_1 = require("./types/detailsDriver");
function CreateResolver(suffix, retunType, entity, middleware) {
    let BaseResolver = (() => {
        let BaseResolver = class BaseResolver {
            listOfUser(userId) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!userId) {
                        throw new Error("user id mustn't be null");
                    }
                    const users = yield entity.findOne({ where: { id: userId } });
                    if (!users) {
                        throw new Error(`${suffix} data not found`);
                    }
                    return {
                        success: true,
                        message: "Save Successfuly",
                        data: users
                    };
                });
            }
        };
        __decorate([
            type_graphql_1.Query(() => retunType, { name: `details${suffix}` }),
            type_graphql_1.UseMiddleware(...(middleware || [])),
            __param(0, type_graphql_1.Arg("userId")),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", Promise)
        ], BaseResolver.prototype, "listOfUser", null);
        BaseResolver = __decorate([
            type_graphql_1.Resolver()
        ], BaseResolver);
        return BaseResolver;
    })();
    return BaseResolver;
}
exports.DetailsDriverResolver = CreateResolver("Driver", detailsDriver_1.DetailsDriverResponse, Driver_1.Driver, [isAuthMiddleware_1.isAuthMiddleware]);
exports.DetailsAgencyResolver = CreateResolver("Agency", detailsAgency_1.DetailsAgencyResponse, Agency_1.Agency, [isAuthMiddleware_1.isAuthMiddleware]);
//# sourceMappingURL=detailsUser.js.map