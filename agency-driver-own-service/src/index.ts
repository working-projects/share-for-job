import 'reflect-metadata'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { FederatedSchema } from './utils/createSchema';
import { createConnection } from 'typeorm'
import cookieParser from 'cookie-parser'

dotenv.config({ path:".env" })

const main = async () =>{

    await createConnection().then(()=>{
        console.log("database connect done");
    }).catch(err => console.log(err))


    const schema = await FederatedSchema

    const server = new ApolloServer({
        schema,
        tracing:false,
        playground:true,
        context:({req, res}:any) =>({req,res})
    });

    const app = express()
   
    app.use(cookieParser())

    server.applyMiddleware({app})

    app.listen(process.env.PORT,()=>{
        console.log(`server start on ${process.env.HOST}:${process.env.PORT}/graphql`);
    })
}


main()

