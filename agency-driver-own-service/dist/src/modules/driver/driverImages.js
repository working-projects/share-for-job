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
exports.ImagesDriverResolver = void 0;
const type_graphql_1 = require("type-graphql");
const driverImage_1 = require("./sheared/driverImage");
const Driver_1 = require("../../entity/Driver");
let ImagesDriverResolver = (() => {
    let ImagesDriverResolver = class ImagesDriverResolver {
        images(driver) {
            return __awaiter(this, void 0, void 0, function* () {
                const urls = new driverImage_1.DriverImage();
                urls.profileImageUrl = driver.images.profile_img;
                urls.nidForntUrl = driver.images.nid_front;
                urls.nidBackUrl = driver.images.nid_back;
                urls.lisenseForntUrl = driver.images.lisense_front;
                urls.lisenseBackUrl = driver.images.lisense_back;
                return urls;
            });
        }
    };
    __decorate([
        type_graphql_1.FieldResolver(() => driverImage_1.DriverImage),
        __param(0, type_graphql_1.Root()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Driver_1.Driver]),
        __metadata("design:returntype", Promise)
    ], ImagesDriverResolver.prototype, "images", null);
    ImagesDriverResolver = __decorate([
        type_graphql_1.Resolver(() => Driver_1.Driver)
    ], ImagesDriverResolver);
    return ImagesDriverResolver;
})();
exports.ImagesDriverResolver = ImagesDriverResolver;
//# sourceMappingURL=driverImages.js.map