import { getConnection } from 'typeorm';
import { Promo } from '../../entity/Promo';


export async function resolvePromoReference(reference:Pick<Promo,"id">):Promise<Promo> {
    const claims = await getConnection().getRepository(Promo).findOne({where:{id:reference.id}})
    if (!claims) {
        throw new Error("ClaimCategories reference id invalid")
    }
    return claims
}