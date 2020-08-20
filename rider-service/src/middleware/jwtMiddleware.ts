import { MiddlewareFn } from "type-graphql";
import { AuthContext } from "../Context/ExpressContext";
import { verify } from "jsonwebtoken";
import { Rider } from "../entity/Rider";
import { accessToken, refreshToken } from "../config/config";
import { config } from "dotenv";
config({ path: "../.env" });
const jwtMiddleWare: MiddlewareFn<AuthContext> = async ({ context }, next) => {
  try {
    const access_token: any = context.req.headers["access_token"] ? context.req.headers["access_token"]: '';

    const refresh_token: any = context.req.headers["refresh_token"]? context.req.headers["refresh_token"]: '';

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

    verify(token, process.env.SECRET_KEY as any,async (err: any, decoded: any) => {

        if (err) {
          verify(rf_token,process.env.SECRET_KEY as string, async (err: any, refreshDecode: any) => {
              if (!err) {
                const retrieve: any = await Rider.findOne({ where: { id: refreshDecode.payload.id }});

                context.req.headers["access_token"] = (await accessToken(retrieve)) as string;

                context.req.headers["refresh_token"] = (await refreshToken(retrieve.id)) as string;
                
              } else {
                throw new Error("Sorry! Token has been expired");
              }
            }
          );
        } 
        
        else {
          context.payload = decoded as any;
        }
      }
    );
  
  } catch (err) {
    console.log(err)
    return err;
  }
  return next()
};

export default jwtMiddleWare;
