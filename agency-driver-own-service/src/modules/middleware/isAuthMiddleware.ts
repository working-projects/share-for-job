import { MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";
import { MyContext } from '../types/MyContext';
import { verify } from "jsonwebtoken";
import { accessToken, refreshToken } from "../../config/config";





export const isAuthMiddleware: MiddlewareFn<MyContext> = ({ context }, next) => {

    try {
        const access_token: any = context.req.headers["access_token"] ? context.req.headers["access_token"] : '';

        const refresh_token: any = context.req.headers["refresh_token"] ? context.req.headers["refresh_token"] : '';

        console.log(access_token, refresh_token)

        if (access_token === '') {
            throw new Error("Please provide JWT token");
        }

        if (
            !access_token.match(/Bearer [A-Za-z0-9\-\._~\+\/]+=*/g) ||
            !refresh_token.match(/Bearer [A-Za-z0-9\-\._~\+\/]+=*/g)
        ) {
            throw new SyntaxError("Token Structure mismatch Please Add Your Prefix");
        }

        const token = access_token?.split(" ")[1];
        const rf_token = refresh_token?.split(" ")[1];

        verify(token, process.env.SECRET_KEY as any, async (err: any, decoded: any) => {

            if (err) {
                verify(rf_token, process.env.SECRET_KEY as string, async (err: any, refreshDecode: any) => {
                    if (!err) {
                       
                        context.req.headers["access_token"] = (await accessToken(refreshDecode.payload)) as string;

                        context.req.headers["refresh_token"] = (await refreshToken(refreshDecode.payload.id )) as string;



                    } else {
                        throw new Error("Sorry! Token has been expired");
                    }
                }
                );
            }

            else {
                context.payload = decoded as any;
                console.log(context.payload)
            }
        }
        );

    } catch (err) {
        console.log(err)
        return err;
    }


    return next()
}



// const authorization = context.req.headers['authorization']
// if (!authorization) {
//     throw new Error('not Authenticated')
// }

// try {
//     const token = authorization?.split(' ')[1]
//     const payload = verify(token,process.env.SECRETACCESS!)
//     context.payload = payload as any
// } catch (err) {
//     console.log(err);
//     throw new Error('not Authenticated')        
// }