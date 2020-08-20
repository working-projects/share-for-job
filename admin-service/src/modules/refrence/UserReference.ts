import { getConnection } from 'typeorm';
import { User } from '../../entity/User';

export async function resolveUserRefrence(reference:Pick<User,"id">):Promise<User> {
    const user = await getConnection().getRepository(User).findOne({where:{id:reference.id}})
    if (!user) {
        throw new Error("User reference id invalid ")
    }
    return user
}