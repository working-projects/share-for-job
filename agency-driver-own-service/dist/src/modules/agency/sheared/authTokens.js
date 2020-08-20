"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
exports.createAccessToken = (user) => {
    return jsonwebtoken_1.sign({ userId: user.id, role: user.role }, process.env.SECRETACCESS, {
        algorithm: "HS256",
        expiresIn: '7d'
    });
};
exports.createRefreshToken = (user) => {
    return jsonwebtoken_1.sign({ userId: user.id, tokenVersion: user.tokenVersion }, process.env.SECRETREFRESH, {
        algorithm: "HS256",
        expiresIn: '30d'
    });
};
//# sourceMappingURL=authTokens.js.map