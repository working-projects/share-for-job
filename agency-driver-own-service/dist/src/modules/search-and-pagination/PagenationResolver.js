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
exports.PaginatedAgencyResolver = exports.PaginatedOfDriverResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Driver_1 = require("../../entity/Driver");
const isAuthMiddleware_1 = require("../middleware/isAuthMiddleware");
const Agency_1 = require("../../entity/Agency");
const typeorm_1 = require("typeorm");
const paginateInput_1 = require("./types/paginateInput");
function CreateResolver(suffix, retunType, entity, middleware) {
    let BaseResolver = (() => {
        let BaseResolver = class BaseResolver {
            listOfUser({ limit, pageNumber }) {
                return __awaiter(this, void 0, void 0, function* () {
                    const searchFormDb = yield typeorm_1.getConnection()
                        .getRepository(entity)
                        .createQueryBuilder("l");
                    if (!searchFormDb) {
                        throw new Error(`${suffix} data not found`);
                    }
                    return searchFormDb.take(limit).skip(pageNumber).getMany();
                });
            }
        };
        __decorate([
            type_graphql_1.Query(() => [retunType], { name: `pagination${suffix}` }),
            type_graphql_1.UseMiddleware(...(middleware || [])),
            __param(0, type_graphql_1.Arg("data")),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [paginateInput_1.PaginatedInput]),
            __metadata("design:returntype", Promise)
        ], BaseResolver.prototype, "listOfUser", null);
        BaseResolver = __decorate([
            type_graphql_1.Resolver()
        ], BaseResolver);
        return BaseResolver;
    })();
    return BaseResolver;
}
exports.PaginatedOfDriverResolver = CreateResolver("Driver", Driver_1.Driver, [isAuthMiddleware_1.isAuthMiddleware]);
exports.PaginatedAgencyResolver = CreateResolver("Agency", Agency_1.Agency, [isAuthMiddleware_1.isAuthMiddleware]);
//# sourceMappingURL=PagenationResolver.js.map