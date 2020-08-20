import { AuthContext } from "../context/AuthContext";
import { MiddlewareFn } from "type-graphql";
import { User } from "../../entity/User";
import UnauthorizedError from "../../errors/UnAuthorizedError";
import NotFound from "../../errors/NotFoundError";
import { verify } from 'jsonwebtoken';
import { config } from 'dotenv';
import { refreshToken, accessToken } from "../../config";

config({ path: '.env' });

export function hasPermission(
  role: string,
  permission: string,
  group: string

): MiddlewareFn<AuthContext> {
  return async ({ context }, next) => {
    const { SECRET_KEY } = process.env;
    try {
      const token: any = context.req.headers['access_token'] ? context.req.headers['access_token'] : null;
      const refresh: any = context.req.headers['refresh_token'] ? context.req.headers['refresh_token'] : null;
      const access_token = token ? token.split(' ')[1] : null;
      const refresh_token = refresh ? refresh.split(' ')[1] : null;

      if (!token.match(/Bearer [A-Za-z0-9\-\._~\+\/]+=*/g)) throw new Error("Token format mismatch send with valid prefix ");
      if (!access_token || !refresh_token) throw new Error("Token can not be empty, pass jwt token in header section");

      verify(access_token, SECRET_KEY as string, async (err: any, data: any) => {
        if (!err) {
          const user: any = await User.findOne({ where: { id: data.user.id }, relations: ['permissions', 'roles'] })
          if (!user) throw new NotFound("Sorry! User not found", 402)
          const hasRole = user.roles.find(async (r: any, index: number) =>await user.roles[index].slug === role && user.group[index].group == group);
          if (!hasRole) throw new NotFound("This Roles is not is assigned you. Please contact with admin more details", 302);
          const hasPermission = user.permissions.find(async(p: any, index: number) => await user.permissions[index].slug === permission && user.permissions[index].group === group);
          if (!hasPermission) throw new NotFound("This Permission is not assigned you. Please contact with admin more details", 302);
        }
      })

    } catch (error) {
      return error;
    }

    next();
  };
}
