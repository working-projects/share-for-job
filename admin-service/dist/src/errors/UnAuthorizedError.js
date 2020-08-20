"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnauthorizedError extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.default = UnauthorizedError;
//# sourceMappingURL=UnAuthorizedError.js.map