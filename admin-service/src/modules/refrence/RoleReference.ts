
import { Role } from "../../entity/Role";
import { getConnection } from "typeorm";


export const resolveRoleRerference = async(reference:Pick<Role,'id'>):Promise<Role[]>=>{
    const role = await getConnection().getRepository(Role).find({where:{id:reference.id}})
    if(!role) throw new Error("Role reference id invalid")
    return role;
}