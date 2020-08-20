import { Resolver, Query, Ctx, UseMiddleware } from "type-graphql";
import { MyContext } from '../types/MyContext';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Driver } from '../../entity/Driver';


@Resolver()
export class QRcodGenerateResolver{

    @Query(()=>String)
    @UseMiddleware(isAuthMiddleware)
    async QRcodeGenForDriver(@Ctx(){payload}:MyContext):Promise<String>{
        const user = await Driver.findOne({where:{id:payload?.userId}})

        if (!user) {
            throw new Error("NO QR code")
        }

        const qr = user.phoneNumber

        return qr
    }
    
}