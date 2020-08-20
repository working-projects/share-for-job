"use strict";
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
exports.FederatedSchema = void 0;
const buildFederatedSchema_1 = require("./buildFederatedSchema");
const RatingReference_1 = require("../modules/reference/RatingReference");
const RiderImages_1 = require("../modules/resolvers/Rider/Input/RiderImages");
exports.FederatedSchema = buildFederatedSchema_1.buildFederatedSchema({
    resolvers: [__dirname + "/../modules/**/*.ts"],
}, {
    Rating: {
        __resolveReference: RatingReference_1.resolveRatingReference,
    },
    Rider: {
        images(rider) {
            return __awaiter(this, void 0, void 0, function* () {
                const urls = new RiderImages_1.RiderImage();
                urls.profileImg = rider.images.profile_img;
                urls.nidFront = rider.images.nid_front;
                urls.nidBack = rider.images.nid_back;
                return urls;
            });
        }
    }
});
//# sourceMappingURL=createSchema.js.map