import { getConnection } from 'typeorm';
import { Claim } from '../../entity/Claim';


export async function resolveClaimReference(reference:Pick<Claim,"id">):Promise<Claim> {
    const claims = await getConnection().getRepository(Claim).findOne({where:{id:reference.id}})
    if (!claims) {
        throw new Error("ClaimCategories reference id invalid")
    }
    return claims
}