import { Resolver, Query, UseMiddleware } from "type-graphql";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';

@Resolver()
export class DemoResolver {

    @Query(()=>String)
    @UseMiddleware(isAuthMiddleware)
    async hello():Promise<string>{
        return "HI working"
    }
}