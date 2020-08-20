
import { buildFederatedSchema } from './buildFederatedSchema';
import {resolveUserRefrence} from '../modules/refrence/UserReference';
import { resolvePermissionRefrence } from '../modules/refrence/PermissionReference';
import { resolveRoleRerference } from '../modules/refrence/RoleReference';
import { resolvePromoReference } from '../modules/refrence/PromoReference';
// import {AdminServiceAuthChecker} from '../modules/middleware/AuthMiddleware'

export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts",__dirname + "/../modules/**/*.js", ],
        // authChecker:AdminServiceAuthChecker
    },
    {
        User: {
            __resolveReference: resolveUserRefrence,
        },
        Permission: {
            __resolveReference: resolvePermissionRefrence
        },
        Role: {
            __resolveReference: resolveRoleRerference
        },
        Promo: {
            __resolveReference: resolvePromoReference
        },

    }

)


