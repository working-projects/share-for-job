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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = void 0;
const User_1 = require("../../entity/User");
const NotFoundError_1 = __importDefault(require("../../errors/NotFoundError"));
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
dotenv_1.config({ path: '.env' });
function hasPermission(role, permission, group) {
    return ({ context }, next) => __awaiter(this, void 0, void 0, function* () {
        const { SECRET_KEY } = process.env;
        try {
            const token = context.req.headers['access_token'] ? context.req.headers['access_token'] : null;
            const refresh = context.req.headers['refresh_token'] ? context.req.headers['refresh_token'] : null;
            const access_token = token ? token.split(' ')[1] : null;
            const refresh_token = refresh ? refresh.split(' ')[1] : null;
            if (!token.match(/Bearer [A-Za-z0-9\-\._~\+\/]+=*/g))
                throw new Error("Token format mismatch send with valid prefix ");
            if (!access_token || !refresh_token)
                throw new Error("Token can not be empty, pass jwt token in header section");
            jsonwebtoken_1.verify(access_token, SECRET_KEY, (err, data) => __awaiter(this, void 0, void 0, function* () {
                if (!err) {
                    const user = yield User_1.User.findOne({ where: { id: data.user.id }, relations: ['permissions', 'roles'] });
                    if (!user)
                        throw new NotFoundError_1.default("Sorry! User not found", 402);
                    const hasRole = user.roles.find((r, index) => __awaiter(this, void 0, void 0, function* () { return (yield user.roles[index].slug) === role && user.group[index].group == group; }));
                    if (!hasRole)
                        throw new NotFoundError_1.default("This Roles is not is assigned you. Please contact with admin more details", 302);
                    const hasPermission = user.permissions.find((p, index) => __awaiter(this, void 0, void 0, function* () { return (yield user.permissions[index].slug) === permission && user.permissions[index].group === group; }));
                    if (!hasPermission)
                        throw new NotFoundError_1.default("This Permission is not assigned you. Please contact with admin more details", 302);
                }
            }));
        }
        catch (error) {
            return error;
        }
        next();
    });
}
exports.hasPermission = hasPermission;
//# sourceMappingURL=AuthMiddleware.js.map