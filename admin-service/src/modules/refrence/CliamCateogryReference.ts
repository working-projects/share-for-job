import { getConnection } from 'typeorm';
import { ClaimCategories } from '../../entity/ClaimCategories';


export async function resolveClaimCartegoriesReference(reference:Pick<ClaimCategories,"id">):Promise<ClaimCategories> {
    const claimCategories = await getConnection().getRepository(ClaimCategories).findOne({where:{id:reference.id}})
    if (!claimCategories) {
        throw new Error("ClaimCategories reference id invalid")
    }
    return claimCategories
}