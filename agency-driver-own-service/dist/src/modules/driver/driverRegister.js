"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.DriverRegisterResolver = void 0;
const type_graphql_1 = require("type-graphql");
const bcrypt = __importStar(require("bcryptjs"));
const registerResponse_1 = require("../types/registerResponse");
const registerInput_1 = require("./input-type/registerInput");
const Driver_1 = require("../../entity/Driver");
let DriverRegisterResolver = (() => {
    let DriverRegisterResolver = class DriverRegisterResolver {
        registerDriver({ first_name, last_name, phoneNumber, password, city, present_address, permanent_address, profileImageUrl, nidForntUrl, nidBackUrl, lisenseForntUrl, lisenseBackUrl, }) {
            return __awaiter(this, void 0, void 0, function* () {
                const hashedPassword = yield bcrypt.hash(password, 12);
                const driver = yield Driver_1.Driver.insert({
                    first_name,
                    last_name,
                    phoneNumber,
                    password: hashedPassword,
                    city,
                    present_address,
                    permanent_address,
                    images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front: lisenseForntUrl, lisense_back: lisenseBackUrl },
                });
                const res = new registerResponse_1.RegisterResponse();
                if (!driver) {
                    res.success = false;
                    res.message = "does not saved";
                    return res;
                }
                res.success = true;
                res.message = "Saved successfuly";
                return res;
            });
        }
    };
    __decorate([
        type_graphql_1.Mutation(() => registerResponse_1.RegisterResponse),
        __param(0, type_graphql_1.Arg("data")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [registerInput_1.RegisterDriverInput]),
        __metadata("design:returntype", Promise)
    ], DriverRegisterResolver.prototype, "registerDriver", null);
    DriverRegisterResolver = __decorate([
        type_graphql_1.Resolver()
    ], DriverRegisterResolver);
    return DriverRegisterResolver;
})();
exports.DriverRegisterResolver = DriverRegisterResolver;
//# sourceMappingURL=driverRegister.js.map