"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.default = ServerError;
//# sourceMappingURL=ServerError.js.map