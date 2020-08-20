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
exports.resolveDriverRefernce = void 0;
const typeorm_1 = require("typeorm");
const Driver_1 = require("../../entity/Driver");
function resolveDriverRefernce(reference) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(reference.id);
        const driver = yield typeorm_1.getConnection().getRepository(Driver_1.Driver).findOne({ where: { id: reference.id } });
        console.log(driver);
        if (!driver) {
            throw new Error("DriverRerference id invalid ");
        }
        return driver;
    });
}
exports.resolveDriverRefernce = resolveDriverRefernce;
//# sourceMappingURL=driverReference.js.map