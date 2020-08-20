import { Resolver, Query, Mutation, Arg, UseMiddleware } from "type-graphql";
import { User } from "../../../entity/User";
import { UserInput } from "./inputs";
import { hash, compare } from "bcryptjs";
import { TokenResponse } from "./type/TokenType";
import { LoginInputs } from "./inputs/loginInputs";
import { accessToken, refreshToken } from "../../../config";
import ServerError from "../../../errors/ServerError";
import { hasPermission } from "../../../modules/middleware/AuthMiddleware";
import { RoleAssignType } from "../role/inputs/RoleAssignType";
import { PermissionAssignType } from "../permission/inputs/permissionAssignType";
import { Permission } from "../../../entity/Permission";
import { Role } from "../../../entity/Role";

@Resolver(User)
class UserResolver {
  @UseMiddleware(hasPermission('admin','user','user'))
  @Query(() => [User])
  async users(): Promise<User[] | any> {
    const user = await User.find({relations:['roles','permissions']});
    if (!user) throw new Error("Not user founded");
    return user;
  }

  @Query(() => User)
  async user(@Arg("id") id: number): Promise<User | any> {
    const user = await User.findOne({ where: { id } ,relations:['roles','permissions']});
    if (!user) throw new Error("Provider user id is not exist");
    return user;
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { firstName, lastName, email, password }: UserInput
  ): Promise<User> {
    const hashedPassword = await hash(password, 12);
    const user = await User.getRepository()
      .create({ firstName, lastName, email, password: hashedPassword })
      .save();
    return user;
  }

  // @UseMiddleware(hasPermission('authentication','permission','role'))
  @Mutation(() => TokenResponse)
  async login(@Arg("data") data: LoginInputs): Promise<TokenResponse | any> {
    console.log(data)
    const login = await User.findOne({ where: { email: data.email } , relations:['roles','permissions']});
    if (login) {
      const isValidPassword = await compare(data.password, login.password);
      if (!isValidPassword) throw new ServerError("Unauthorized", 401);
      const tokenResponse = new TokenResponse();
      delete login.password
      tokenResponse.ACCESS_TOKEN = accessToken({...login});
      tokenResponse.REFRESH_TOKEN = refreshToken({id:login.id});
      return tokenResponse;
    }
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number): Promise<boolean | any> {
    const user = await User.delete({ id });
    if (!user) throw new Error("Delete fail");
    if (user) return true;
  }

  @Mutation(() => Boolean)
  async assignRole(@Arg("data") data: RoleAssignType): Promise<Boolean | any> {
    try {
      const user: any = await User.findOneOrFail({where: { id: data.userId },relations: ["roles"]});
      const role = await Role.findOneOrFail({ where: { id: data.roleId } });
      user.roles = [role];
      await user.save();
      return true;

    } catch (error) {
      console.log(error)
      return false;
    }
  }





  @Mutation(()=>Boolean)
  async assignPermission(
    @Arg('data') data:PermissionAssignType
  ):Promise<boolean | any>{
   try {
    const user:any = await User.findOneOrFail({where:{id:data.userId},relations:['permissions']})
    const permission = await Permission.findOneOrFail({where:{id:data.permissionId}})
    user.permissions = [permission];
    await user.save();
    if(user) return true;
   } catch (error) {
     return false
   }
  }
}

export default UserResolver;
