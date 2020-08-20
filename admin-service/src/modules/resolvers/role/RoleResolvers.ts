import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Role } from "../../../entity/Role";
import { RolesInputs } from "./inputs";
import ServerError from "../../../errors/ServerError";
import { getConnection } from "typeorm";

@Resolver(Role)
export class RoleResolver {
  @Mutation(() => Role)
  async createRole(@Arg("data") data: RolesInputs): Promise<Role> {
    const role = await Role.create(data).save();
    return role;
  }

  @Query(() => Role)
  async findRole(@Arg("id") id: number): Promise<Role | undefined> {
    const role = await Role.getRepository().findOne({ where: { id: id } });
    if (!role) throw new Error("Role not found");
    return role;
  }

  @Mutation(() => Role)
  async deleteRole(@Arg("id") id: number): Promise<Role | any> {
    const role = await Role.delete(id);
    if (!role) throw new ServerError("Could not delete", 500);
    return "Role Deleted Successfully";
  }

  @Mutation(() => Role)
  async updateRole(
    @Arg("id") id: number,
    @Arg("data") { name, slug, status, group }: RolesInputs
  ): Promise<Role | any> {
    const role = await getConnection()
      .createQueryBuilder()
      .update(Role)
      .set({
        name,
        slug,
        status,
        group,
      })
      .where("id = :id", { id })
      .execute();
    if (!role) throw new ServerError("Could not updated", 500);
    return "Role Deleted Successfully";
  }
}
