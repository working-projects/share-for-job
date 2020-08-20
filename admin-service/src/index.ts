import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { FederatedSchema } from './utils/createSchema'
import { createConnection } from 'typeorm'
import cookieParser from 'cookie-parser'

dotenv.config({ path:".env" })

const main = async () =>{

    await createConnection();
    const schema = await FederatedSchema

    const server = new ApolloServer({
        schema,
        tracing:false,
        playground:true,
        context:({req, res}:any) =>{
            return {
                req,
                res
            }
        }
    });

    const app = express()
   
    app.use(cookieParser())

    server.applyMiddleware({app})

    app.listen(process.env.PORT,()=>console.log(`server start on http://localhost:${process.env.PORT}/graphql`))
}


main()

