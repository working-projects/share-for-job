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
exports.RatingResolver = void 0;
const type_graphql_1 = require("type-graphql");
const ratingInput_1 = require("./types/ratingInput");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const Driver_1 = require("../../entity/Driver");
const Rating_1 = require("../../entity/Rating");
const typeorm_1 = require("typeorm");
const Agency_1 = require("../../entity/Agency");
let RatingResolver = (() => {
    let RatingResolver = class RatingResolver {
        createRating({ rating, riderId, driverId }) {
            return __awaiter(this, void 0, void 0, function* () {
                const driver = yield Driver_1.Driver.findOne({ where: { id: driverId } });
                if (!driver) {
                    throw new Error("Driver not found");
                }
                yield Rating_1.ADRating.insert({
                    ratingValue: rating,
                    riderId,
                    driverId
                }).then((rating) => __awaiter(this, void 0, void 0, function* () {
                    console.log("rating:" + rating);
                    this.addRatingDriver(driver);
                }));
                return true;
            });
        }
        updateRating(id, { rating, riderId, driverId }) {
            return __awaiter(this, void 0, void 0, function* () {
                const rate = yield Rating_1.ADRating.findOne({ where: { id } });
                if (!rate) {
                    throw new Error("rating not found");
                }
                Object.assign(rate, {
                    ratingValue: rating,
                    riderId,
                    driverId
                });
                yield rate.save();
                return rate;
            });
        }
        deleteRating(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const rate = yield Rating_1.ADRating.findOne({ where: { id } });
                if (!rate) {
                    throw new Error("rating not found");
                }
                yield rate.remove();
                return true;
            });
        }
        ratingOne(id) {
            return __awaiter(this, void 0, void 0, function* () {
                const rate = yield Rating_1.ADRating.findOne({ where: { id } });
                if (!rate) {
                    throw new Error("rating not found");
                }
                return rate;
            });
        }
        topRatingDriver() {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield typeorm_1.getRepository(Driver_1.Driver)
                    .createQueryBuilder("l")
                    .select("*")
                    .addSelect("MAX(l.rating)", "max")
                    .groupBy("l.id")
                    .orderBy("l.rating", "DESC")
                    .getRawMany();
                return result;
            });
        }
        topRatingAgency() {
            return __awaiter(this, void 0, void 0, function* () {
                const result = yield typeorm_1.getRepository(Agency_1.Agency)
                    .createQueryBuilder("l")
                    .select("*")
                    .addSelect("MAX(l.rating)", "max")
                    .groupBy("l.id")
                    .orderBy("l.rating", "DESC")
                    .getRawMany();
                return result;
            });
        }
        addRatingDriver(driver) {
            return __awaiter(this, void 0, void 0, function* () {
                const n = yield Rating_1.ADRating.count({ where: { driverId: driver.id } });
                const { sum } = yield typeorm_1.getRepository(Rating_1.ADRating)
                    .createQueryBuilder("l")
                    .select("SUM(l.ratingValue)", "sum")
                    .where("l.driverId = :id", { id: driver.id })
                    .getRawOne();
                console.log(`count : ${n}, sum : ${sum} avg : ${sum / n}`);
                let avgRating = sum / n;
                Object.assign(driver, {
                    rating: avgRating.toFixed(2)
                });
                yield driver.save().then((d) => __awaiter(this, void 0, void 0, function* () {
                    this.addRatingAgency(d);
                }));
            });
        }
        addRatingAgency(driver) {
            return __awaiter(this, void 0, void 0, function* () {
                const { length } = yield Driver_1.Driver.findAndCount({ where: { id: driver.agencyId } });
                const { sum } = yield typeorm_1.getRepository(Driver_1.Driver)
                    .createQueryBuilder("l")
                    .select("SUM(l.rating)", "sum")
                    .where("l.agencyId = :id", { id: driver.agencyId })
                    .getRawOne();
                if (!sum) {
                    throw new Error("agency not found ");
                }
                console.log(`Agency count : ${length}, sum : ${sum} avg : ${sum / length}`);
                let avgRating = (sum / length).toFixed(2);
                const agency = yield Agency_1.Agency.findOne({ where: { id: driver.agencyId } });
                Object.assign(agency, {
                    rating: avgRating
                });
                yield (agency === null || agency === void 0 ? void 0 : agency.save());
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => Boolean),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [ratingInput_1.ADRatingInput]),
        __metadata("design:returntype", Promise)
    ], RatingResolver.prototype, "createRating", null);
    __decorate([
        type_graphql_1.Mutation(() => Rating_1.ADRating),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("ratingId")), __param(1, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, ratingInput_1.ADRatingInput]),
        __metadata("design:returntype", Promise)
    ], RatingResolver.prototype, "updateRating", null);
    __decorate([
        type_graphql_1.Mutation(() => Boolean),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("ratingId")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], RatingResolver.prototype, "deleteRating", null);
    __decorate([
        type_graphql_1.Query(() => Rating_1.ADRating),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("ratingId")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], RatingResolver.prototype, "ratingOne", null);
    __decorate([
        type_graphql_1.Query(() => [Driver_1.Driver]),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RatingResolver.prototype, "topRatingDriver", null);
    __decorate([
        type_graphql_1.Query(() => [Agency_1.Agency]),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RatingResolver.prototype, "topRatingAgency", null);
    RatingResolver = __decorate([
        type_graphql_1.Resolver()
    ], RatingResolver);
    return RatingResolver;
})();
exports.RatingResolver = RatingResolver;
//# sourceMappingURL=ratingResolver.js.map