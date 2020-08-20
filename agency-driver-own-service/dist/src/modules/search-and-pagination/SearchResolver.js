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
exports.SearchResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Agency_1 = require("../../entity/Agency");
const typeorm_1 = require("typeorm");
const searchAndPaginated_1 = require("./types/searchAndPaginated");
const Driver_1 = require("../../entity/Driver");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
let SearchResolver = (() => {
    let SearchResolver = class SearchResolver {
        searchAgency({ name, pageNumber, limit }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!name) {
                    throw new Error("Search mustn't be null");
                }
                const searchFormDb = yield typeorm_1.getConnection()
                    .getRepository(Agency_1.Agency)
                    .createQueryBuilder("l")
                    .orWhere("l.phoneNumber ilike :phone ", { phone: `%${name}%` })
                    .orWhere("l.first_name ilike :name ", { name: `%${name}%` })
                    .orWhere("l.company_name ilike :company ", { company: `%${name}%` })
                    .orWhere("l.company_address ilike :address ", { address: `%${name}%` })
                    .orWhere("l.city ilike :city ", { city: `%${name}%` });
                if (!searchFormDb) {
                    throw new Error("Sorry , not Found!!");
                }
                return searchFormDb.take(limit).skip(pageNumber).getMany();
            });
        }
        searchDriver({ name, pageNumber, limit }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!name) {
                    throw new Error("Search mustn't be null");
                }
                const searchFormDb = yield typeorm_1.getConnection()
                    .getRepository(Driver_1.Driver)
                    .createQueryBuilder("l")
                    .orWhere("l.phoneNumber ilike :phone ", { phone: `%${name}%` })
                    .orWhere("l.first_name ilike :name ", { name: `%${name}%` })
                    .orWhere("l.first_name ilike :name ", { name: `%${name}%` });
                if (!searchFormDb) {
                    throw new Error("Sorry , not Found!!");
                }
                return searchFormDb.take(limit).skip(pageNumber).getMany();
            });
        }
        appSearchDrivers(name) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!name) {
                    throw new Error("Search mustn't be null");
                }
                const searchFormDb = yield typeorm_1.getConnection()
                    .getRepository(Driver_1.Driver)
                    .createQueryBuilder("l")
                    .orWhere("l.phoneNumber ilike :phone ", { phone: `%${name}%` })
                    .orWhere("l.first_name ilike :name ", { name: `%${name}%` })
                    .orWhere("l.city ilike :city ", { city: `%${name}%` });
                if (!searchFormDb) {
                    throw new Error("Sorry , not Found!!");
                }
                return searchFormDb.getMany();
            });
        }
    };
    __decorate([
        type_graphql_1.Query(() => [Agency_1.Agency]),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [searchAndPaginated_1.SearchAndPaginated]),
        __metadata("design:returntype", Promise)
    ], SearchResolver.prototype, "searchAgency", null);
    __decorate([
        type_graphql_1.Query(() => [Driver_1.Driver]),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [searchAndPaginated_1.SearchAndPaginated]),
        __metadata("design:returntype", Promise)
    ], SearchResolver.prototype, "searchDriver", null);
    __decorate([
        type_graphql_1.Query(() => [Driver_1.Driver]),
        type_graphql_1.UseMiddleware(isAuthMiddleware_1.isAuthMiddleware),
        __param(0, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], SearchResolver.prototype, "appSearchDrivers", null);
    SearchResolver = __decorate([
        type_graphql_1.Resolver()
    ], SearchResolver);
    return SearchResolver;
})();
exports.SearchResolver = SearchResolver;
//# sourceMappingURL=SearchResolver.js.map