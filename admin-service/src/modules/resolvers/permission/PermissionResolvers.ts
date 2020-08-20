import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Permission } from "../../../entity/Permission";
import { PermissionInputs } from "./inputs";
import ServerError from "../../../errors/ServerError";



@Resolver(Permission)
export class PermissionResolver {
  @Mutation(() => Permission)
  async createPermission(
    @Arg("data") data: PermissionInputs
  ): Promise<Permission> {
    const permissions = await Permission.create(data).save();
    return permissions;
  }

  @Query(() => Permission)
  async findPermission(@Arg("id") id: number): Promise<Permission | undefined> {
    const permission = await Permission.getRepository().findOne({
      where: { id: id },
    });
    return permission;
  }

  @Mutation(() => Permission)
  async deletePermission(@Arg("id") id: number): Promise<Permission | any> {
    const permission = await Permission.delete({ id });
    if (!permission) throw new ServerError("Could not delete", 500);
    return true;
  }


  @Mutation(() => Permission)
  async updatePermission(
    @Arg("id") id: number,
    @Arg("data") data: PermissionInputs
  ): Promise<Permission | any> {
    const permission = await Permission.createQueryBuilder()
      .update(data)
      .set(data)
      .where("id = :id", { id })
      .execute();
    if (!permission) throw new ServerError("Could not updated", 500);
    return permission;
  }


  

}
