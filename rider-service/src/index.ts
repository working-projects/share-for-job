import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import { FederatedSchema } from "./utils/createSchema";
dotenv.config({ path: ".env" });

const main = async () => {
  await createConnection().then(()=>{
    console.log("Databse connetion done");
    
  }).catch(e =>{
    console.log(`Error: databse connection failed ${e}`);
  });
  const schema = await FederatedSchema
  const server = new ApolloServer({
      schema,
      tracing:false,
      subscriptions:false,
      playground:true,
      context:({req, res}:any) =>{
        // console.log(req.headers)
        return {req,res}

      }
    })

  const app = express()
  app.use(cookieParser())
  app.use(bodyParser.json())
  server.applyMiddleware({app})
  app.listen(process.env.PORT,()=>console.log(`server start on http://localhost:${process.env.PORT}/graphql`))
};

main();
