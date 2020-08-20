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
exports.UpdateAgencyResolver = void 0;
const type_graphql_1 = require("type-graphql");
const statusEnumType_1 = require("../types/statusEnumType");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const updateDriverInput_1 = require("./input-type/updateDriverInput");
const Driver_1 = require("../../entity/Driver");
let UpdateAgencyResolver = (() => {
    let UpdateAgencyResolver = class UpdateAgencyResolver {
        updateDriver(id, { first_name, last_name, phoneNumber, city, present_address, permanent_address, profileImageUrl, nidForntUrl, nidBackUrl, lisenseForntUrl, lisenseBackUrl, agencyId }) {
            return __awaiter(this, void 0, void 0, function* () {
                const driver = yield Driver_1.Driver.findOne({ where: { id } });
                if (!driver)
                    throw new Error("driver not found!");
                Object.assign(driver, {
                    first_name,
                    last_name,
                    phoneNumber,
                    city,
                    present_address,
                    permanent_address,
                    images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front: lisenseForntUrl, lisense_back: lisenseBackUrl },
                    agencyId: agencyId
                });
                yield driver.save();
                return driver;
            });
        }
        app_updateDriver(id, { first_name, last_name, phoneNumber, city, present_address, permanent_address, profileImageUrl, nidForntUrl, nidBackUrl, lisenseForntUrl, lisenseBackUrl, agencyId }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!id) {
                    throw new Error("user id mustn't be null");
                }
                const user = yield Driver_1.Driver.findOne({ where: { id: id } });
                if (!user) {
                    throw new Error(`Driver data not found`);
                }
                if (user.status === statusEnumType_1.Status.PENDING) {
                    throw new Error(`Not yet , your account did not allow`);
                }
                else if (user.status === statusEnumType_1.Status.SUSPENDED) {
                    throw new Error(`Your Account Suspended, Please Contact our helpline`);
                }
                else if (user.status === statusEnumType_1.Status.INACTIVE) {
                    throw new Error(`Your Account Inactive`);
                }
                else {
                    const driver = yield Driver_1.Driver.findOne({ where: { id } });
                    if (!driver)
                        throw new Error("driver not found!");
                    Object.assign(driver, {
                        first_name,
                        last_name,
                        phoneNumber,
                        city,
                        present_address,
                        permanent_address,
                        images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front: lisenseForntUrl, lisense_back: lisenseBackUrl },
                        agencyId: agencyId
                    });
                    yield driver.save();
                    return driver;
                }
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => Driver_1.Driver),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, updateDriverInput_1.DriverUpdateInput]),
        __metadata("design:returntype", Promise)
    ], UpdateAgencyResolver.prototype, "updateDriver", null);
    __decorate([
        type_graphql_1.Mutation(() => Driver_1.Driver),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("id")), __param(1, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, updateDriverInput_1.DriverUpdateInput]),
        __metadata("design:returntype", Promise)
    ], UpdateAgencyResolver.prototype, "app_updateDriver", null);
    UpdateAgencyResolver = __decorate([
        type_graphql_1.Resolver()
    ], UpdateAgencyResolver);
    return UpdateAgencyResolver;
})();
exports.UpdateAgencyResolver = UpdateAgencyResolver;
//# sourceMappingURL=updateDriver.js.map