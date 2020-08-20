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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const apollo_server_express_1 = require("apollo-server-express");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const createSchema_1 = require("./utils/createSchema");
dotenv_1.default.config({ path: ".env" });
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection().then(() => {
        console.log("Databse connetion done");
    }).catch(e => {
        console.log(`Error: databse connection failed ${e}`);
    });
    const schema = yield createSchema_1.FederatedSchema;
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        tracing: false,
        subscriptions: false,
        playground: true,
        context: ({ req, res }) => {
            return { req, res };
        }
    });
    const app = express_1.default();
    app.use(cookie_parser_1.default());
    app.use(body_parser_1.default.json());
    server.applyMiddleware({ app });
    app.listen(process.env.PORT, () => console.log(`server start on http://localhost:${process.env.PORT}/graphql`));
});
main();
//# sourceMappingURL=index.js.map