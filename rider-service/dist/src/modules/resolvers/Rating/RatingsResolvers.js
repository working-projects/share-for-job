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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Rating_1 = require("../../../entity/Rating");
const Input_1 = __importDefault(require("./Input"));
const jwtMiddleware_1 = __importDefault(require("../../../middleware/jwtMiddleware"));
let RatingsResolvers = class RatingsResolvers {
    riderRatings(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Rating_1.Rating.find({ where: { riderId: id } });
            let avg_rating = 0;
            for (let r of data) {
                avg_rating = Number(avg_rating) + Number(r.rating);
            }
            avg_rating = Number((avg_rating / data.length));
            const ratings = avg_rating.toFixed(2);
            return {
                rating: ratings
            };
        });
    }
    rate_driver(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rate = yield Rating_1.Rating.create(data).save();
            if (!rate)
                throw new Error("Sorry Some error occurred try again");
            return rate;
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(jwtMiddleware_1.default),
    type_graphql_1.Query(() => Rating_1.Rating),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RatingsResolvers.prototype, "riderRatings", null);
__decorate([
    type_graphql_1.UseMiddleware(jwtMiddleware_1.default),
    type_graphql_1.Mutation(() => Rating_1.Rating),
    __param(0, type_graphql_1.Arg('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Input_1.default]),
    __metadata("design:returntype", Promise)
], RatingsResolvers.prototype, "rate_driver", null);
RatingsResolvers = __decorate([
    type_graphql_1.Resolver(Rating_1.Rating)
], RatingsResolvers);
exports.default = RatingsResolvers;
//# sourceMappingURL=RatingsResolvers.js.map