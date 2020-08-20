"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFound extends Error {
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.default = NotFound;
//# sourceMappingURL=NotFoundError.js.map