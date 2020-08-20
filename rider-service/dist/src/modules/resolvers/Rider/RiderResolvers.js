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
const Rider_1 = require("../../../entity/Rider");
const Input_1 = require("./Input");
const config_1 = require("../../../config/config");
const Token_1 = __importDefault(require("./Input/Token"));
const PhoneInputs_1 = __importDefault(require("./Input/PhoneInputs"));
const typeorm_1 = require("typeorm");
const jwtMiddleware_1 = __importDefault(require("../../../middleware/jwtMiddleware"));
const RiderUpdateInput_1 = require("./Input/RiderUpdateInput");
let RatingResolver = class RatingResolver {
    rider(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const singleRider = yield Rider_1.Rider.findOne(id);
            if (!singleRider)
                throw new Error("Sorry Rider not found");
            return singleRider;
        });
    }
    riders() {
        return __awaiter(this, void 0, void 0, function* () {
            const allRiders = yield Rider_1.Rider.find();
            if (!allRiders)
                throw new Error("Sorry Riders not found");
            return allRiders;
        });
    }
    search(query, limit, pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const rider = yield typeorm_1.getConnection()
                .getRepository(Rider_1.Rider)
                .createQueryBuilder("l")
                .orWhere("l.firstName ilike :firstName ", { firstName: `%${query}%` })
                .orWhere("l.lastName ilike :lastName ", { lastName: `%${query}%` })
                .orWhere("l.email ilike :email", { email: `%${query}%` })
                .orWhere("l.phone ilike :phone", { phone: `%${query}%` })
                .take(limit)
                .skip(pageNumber)
                .getMany();
            if (!rider)
                throw new Error("No item found");
            return rider;
        });
    }
    riderLogin({ phone }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = {
                    ACCESS_TOKEN: "",
                    REFRESH_TOKEN: "",
                };
                const rider = yield Rider_1.Rider.findOneOrFail({ where: { phone: phone } });
                if (!rider)
                    throw new Error("Login Failed");
                token.ACCESS_TOKEN = yield config_1.accessToken(rider);
                token.REFRESH_TOKEN = yield config_1.refreshToken(rider.id);
                return token;
            }
            catch (error) {
                return error;
            }
        });
    }
    loginORRegister({ firstName, lastName, phone, dob, email, isActive, profileImg, nidFront, nidBack, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = {
                ACCESS_TOKEN: "",
                REFRESH_TOKEN: "",
            };
            const login = yield Rider_1.Rider.findOne({ where: { phone } });
            if (login) {
                token.ACCESS_TOKEN = yield config_1.accessToken(login);
                token.REFRESH_TOKEN = yield config_1.refreshToken(login.id);
                return token;
            }
            else {
                const rider = yield Rider_1.Rider.create({
                    firstName,
                    lastName,
                    phone,
                    email,
                    dob,
                    images: {
                        profile_img: profileImg,
                        nid_front: nidFront,
                        nid_back: nidBack,
                    },
                    isActive,
                }).save();
                if (!rider)
                    throw new Error("Rider Registration Failed");
                console.log("register", rider.id);
                token.ACCESS_TOKEN = yield config_1.accessToken(rider);
                token.REFRESH_TOKEN = yield config_1.refreshToken(rider.id);
                return token;
            }
        });
    }
    updateRider(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const rider = yield Rider_1.Rider.findOne({ where: { id: data.id } });
            if (!rider)
                throw new Error("Rider not Found");
            rider.firstName = data.firstName;
            rider.lastName = data.lastName;
            rider.phone = data.phone;
            (rider.email = data.email), (rider.dob = data.dob);
            rider.images = {
                profile_img: data.profileImg,
                nid_front: data.nidFront,
                nid_back: data.nidBack,
            };
            const updated = yield rider.save();
            if (updated)
                return rider;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => Rider_1.Rider),
    type_graphql_1.UseMiddleware(jwtMiddleware_1.default),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RatingResolver.prototype, "rider", null);
__decorate([
    type_graphql_1.Query(() => [Rider_1.Rider]),
    type_graphql_1.UseMiddleware(jwtMiddleware_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RatingResolver.prototype, "riders", null);
__decorate([
    type_graphql_1.Query(() => [Rider_1.Rider]),
    type_graphql_1.UseMiddleware(jwtMiddleware_1.default),
    __param(0, type_graphql_1.Arg("query")),
    __param(1, type_graphql_1.Arg("limit")),
    __param(2, type_graphql_1.Arg("pageNumber")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], RatingResolver.prototype, "search", null);
__decorate([
    type_graphql_1.Mutation(() => Token_1.default),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PhoneInputs_1.default]),
    __metadata("design:returntype", Promise)
], RatingResolver.prototype, "riderLogin", null);
__decorate([
    type_graphql_1.Mutation(() => Token_1.default),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Input_1.RiderRegisterInput]),
    __metadata("design:returntype", Promise)
], RatingResolver.prototype, "loginORRegister", null);
__decorate([
    type_graphql_1.UseMiddleware(jwtMiddleware_1.default),
    type_graphql_1.Mutation(() => Rider_1.Rider),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RiderUpdateInput_1.RiderUpdateInput]),
    __metadata("design:returntype", Promise)
], RatingResolver.prototype, "updateRider", null);
RatingResolver = __decorate([
    type_graphql_1.Resolver(Rider_1.Rider)
], RatingResolver);
exports.default = RatingResolver;
//# sourceMappingURL=RiderResolvers.js.map