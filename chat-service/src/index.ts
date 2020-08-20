import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import { connect } from "mongoose";
import { ApolloServer } from "apollo-server";
import { FederatedSchema } from "./utils/createSchema";

dotenv.config({ path: ".env" });
const port = process.env.PORT || 5003;

async function bootStrap() {
  await connect(`mongodb://127.0.0.1:27017/`, {
    useNewUrlParser: true,
    dbName: "chat-service",
    useUnifiedTopology: true,
  }).then(() => console.log("Database Connected"));
  const schema = await FederatedSchema;
  const server = new ApolloServer({
    schema,
    tracing: false,
    playground: true,
    context: ({ req, res }: any) => ({ req, res }),
  });

  server.listen(port).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

bootStrap();
