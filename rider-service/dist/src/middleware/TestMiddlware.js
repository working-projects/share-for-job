"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
exports.isAuthMiddleware = ({ context }, next) => {
    console.log(context);
    const authorization = context.req.headers['authorization'];
    if (!authorization) {
        throw new Error('not Authenticated');
    }
    try {
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
        const payload = jsonwebtoken_1.verify(token, process.env.SECRETACCESS);
        context.payload = payload;
    }
    catch (err) {
        console.log(err);
        throw new Error('not Authenticated');
    }
    return next();
};
//# sourceMappingURL=TestMiddlware.js.map