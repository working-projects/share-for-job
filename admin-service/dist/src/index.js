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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv = __importStar(require("dotenv"));
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const createSchema_1 = require("./utils/createSchema");
const typeorm_1 = require("typeorm");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv.config({ path: ".env" });
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection();
    const schema = yield createSchema_1.FederatedSchema;
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        tracing: false,
        playground: true,
        context: ({ req, res }) => {
            return {
                req,
                res
            };
        }
    });
    const app = express_1.default();
    app.use(cookie_parser_1.default());
    server.applyMiddleware({ app });
    app.listen(process.env.PORT, () => console.log(`server start on http://localhost:${process.env.PORT}/graphql`));
});
main();
//# sourceMappingURL=index.js.map