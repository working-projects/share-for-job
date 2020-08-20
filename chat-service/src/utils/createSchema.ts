
import { buildFederatedSchema } from './buildFederatedSchema'
import { resolveMessageReference } from '../modules/reference/MessageReference'


export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
    },
    {
        Message: {
            __resolveReference: resolveMessageReference 
        },
    }
)