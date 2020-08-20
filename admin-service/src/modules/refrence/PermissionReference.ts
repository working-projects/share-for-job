import { getConnection } from 'typeorm';
import { Permission } from '../../entity/Permission';


export async function resolvePermissionRefrence(reference:Pick<Permission,"id">):Promise<Permission> {
    const permission = await getConnection().getRepository(Permission).findOne({where:{id:reference.id}})
    if (!permission) {
        throw new Error("permission reference id invalid")
    }
    return permission
}