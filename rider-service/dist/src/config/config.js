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
exports.refreshToken = exports.accessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
dotenv_1.config({ path: '.env' });
const accessToken = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { SECRET_KEY, EXPIRE_IN_ACCESS_TOKEN } = process.env;
    const access = jsonwebtoken_1.sign({ payload: {
            id: data
        } }, SECRET_KEY, { expiresIn: EXPIRE_IN_ACCESS_TOKEN });
    return `Bearer ${access}`;
});
exports.accessToken = accessToken;
const refreshToken = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const { SECRET_KEY, EXPIRE_IN_REFRESH_TOKEN } = process.env;
    const refresh = jsonwebtoken_1.sign({ payload: {
            id
        } }, SECRET_KEY, { expiresIn: EXPIRE_IN_REFRESH_TOKEN });
    return `Bearer ${refresh}`;
});
exports.refreshToken = refreshToken;
//# sourceMappingURL=config.js.map