
import { buildFederatedSchema } from './buildFederatedSchema'
import { resolveAgencyRefernce } from '../modules/reference/agencyReference';
import { resolveDriverRefernce } from '../modules/reference/driverReference';
//import { customRoleChecker } from '../modules/middleware/roleCheker';

export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
       // authChecker:customRoleChecker
    },
    {
        Agency: {
            __resolveReference: resolveAgencyRefernce 
        },

        Driver:{
            __resolveReference: resolveDriverRefernce 
        }
    }


    // {
    //     Product: {
    //         __resolveReference: resolveProductRefernce,

    //         user(product:Product) {
    //             return { __typename: "User", id: product.userId }
    //         },
    //     }
    // }
)


