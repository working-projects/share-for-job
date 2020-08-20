import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway'
import * as express from 'express'

dotenv.config({ path:".env" })

const app = express()

const gateway = new ApolloGateway({
    serviceList:[
     
    ],
    buildService({name, url}){
        return new RemoteGraphQLDataSource({
            url,
            willSendRequest({request,context}){
                if (context.Authorization) {
                    request.http?.headers.set("Authorization", context.Authorization);
                  }
            }
        })
    }
})



const server = new ApolloServer({
    gateway,
    subscriptions:false,
    context: ({ req }) => {
        return {
          Authorization: req.headers.authorization || null
        }
    }
})

server.applyMiddleware({app})

app.listen(process.env.PORT,()=>{
    console.log(`server start on ${process.env.HOST}:${process.env.PORT}/graphql`);
})

