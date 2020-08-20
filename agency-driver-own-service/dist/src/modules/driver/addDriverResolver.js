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
exports.AddDriverResolver = void 0;
const type_graphql_1 = require("type-graphql");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const Driver_1 = require("../../entity/Driver");
const Agency_1 = require("../../entity/Agency");
const statusEnumType_1 = require("../types/statusEnumType");
let AddDriverResolver = (() => {
    let AddDriverResolver = class AddDriverResolver {
        addDriverToAgency({ payload }, phone) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield Agency_1.Agency.findOne({ where: { id: payload === null || payload === void 0 ? void 0 : payload.userId } });
                if ((user === null || user === void 0 ? void 0 : user.status) === statusEnumType_1.Status.PENDING) {
                    throw new Error(`Not yet , your account did not allow`);
                }
                else if ((user === null || user === void 0 ? void 0 : user.status) === statusEnumType_1.Status.SUSPENDED) {
                    throw new Error(`Your Account Suspended, Please Contact our helpline`);
                }
                else if ((user === null || user === void 0 ? void 0 : user.status) === statusEnumType_1.Status.INACTIVE) {
                    throw new Error(`Your Account Inactive`);
                }
                else {
                    const driver = yield Driver_1.Driver.findOne({ where: { phoneNumber: phone } });
                    if (!driver)
                        throw new Error("Driver not found!");
                    if ((driver === null || driver === void 0 ? void 0 : driver.status) === statusEnumType_1.Status.PENDING) {
                        throw new Error(`Not yet , your account did not allow`);
                    }
                    else if ((driver === null || driver === void 0 ? void 0 : driver.status) === statusEnumType_1.Status.SUSPENDED) {
                        throw new Error(`Your Account Suspended, Please Contact our helpline`);
                    }
                    else if ((driver === null || driver === void 0 ? void 0 : driver.status) === statusEnumType_1.Status.INACTIVE) {
                        throw new Error(`Your Account Inactive`);
                    }
                    else {
                        Object.assign(driver, {
                            agencyId: user === null || user === void 0 ? void 0 : user.id
                        });
                        yield driver.save();
                        return true;
                    }
                }
                return false;
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => Boolean),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Ctx()), __param(1, type_graphql_1.Arg("phone")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], AddDriverResolver.prototype, "addDriverToAgency", null);
    AddDriverResolver = __decorate([
        type_graphql_1.Resolver()
    ], AddDriverResolver);
    return AddDriverResolver;
})();
exports.AddDriverResolver = AddDriverResolver;
//# sourceMappingURL=addDriverResolver.js.map