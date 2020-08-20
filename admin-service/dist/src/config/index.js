"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.accessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
dotenv_1.config({ path: '.env' });
const { SECRET_KEY, EXPIRE_IN_ACCESS_TOKEN, EXPIRE_IN_REFRESH_TOKEN, ALGORITHM, ISSUER, AUDIENCE } = process.env;
const accessToken = (id) => {
    const access = jsonwebtoken_1.sign({ user: id }, SECRET_KEY, {
        expiresIn: EXPIRE_IN_ACCESS_TOKEN,
    });
    return `Bearer ${access}`;
};
exports.accessToken = accessToken;
const refreshToken = (id) => {
    const refresh = jsonwebtoken_1.sign({ user: id }, SECRET_KEY, {
        expiresIn: EXPIRE_IN_REFRESH_TOKEN,
    });
    return `Bearer ${refresh}`;
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=index.js.map