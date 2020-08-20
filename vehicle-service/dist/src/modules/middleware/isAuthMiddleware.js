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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.isAuthMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../config/config");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: ".env" });
exports.isAuthMiddleware = ({ context }, next) => {
    try {
        const access_token = context.req.headers["access_token"] ? context.req.headers["access_token"] : '';
        const refresh_token = context.req.headers["refresh_token"] ? context.req.headers["refresh_token"] : '';
        console.log(access_token, refresh_token);
        if (access_token === '') {
            throw new Error("Please provide JWT token");
        }
        if (!access_token.match(/Bearer [A-Za-z0-9\-\._~\+\/]+=*/g) ||
            !refresh_token.match(/Bearer [A-Za-z0-9\-\._~\+\/]+=*/g)) {
            throw new SyntaxError("Token Structure mismatch Please Add Your Prefix");
        }
        const token = access_token === null || access_token === void 0 ? void 0 : access_token.split(" ")[1];
        const rf_token = refresh_token === null || refresh_token === void 0 ? void 0 : refresh_token.split(" ")[1];
        jsonwebtoken_1.verify(token, process.env.SECRET_KEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                jsonwebtoken_1.verify(rf_token, process.env.SECRET_KEY, (err, refreshDecode) => __awaiter(void 0, void 0, void 0, function* () {
                    if (!err) {
                        context.req.headers["access_token"] = (yield config_1.accessToken(refreshDecode.payload));
                        context.req.headers["refresh_token"] = (yield config_1.refreshToken(refreshDecode.payload.id));
                    }
                    else {
                        throw new Error("Sorry! Token has been expired");
                    }
                }));
            }
            else {
                context.payload = decoded;
                console.log(context.payload);
            }
        }));
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return next();
};
//# sourceMappingURL=isAuthMiddleware.js.map