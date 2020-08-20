import { getConnection } from 'typeorm';
import { Rating } from '../../entity/Rating';

export async function resolveRatingReference(reference:Pick<Rating,"id">):Promise<Rating> {
    const rating = await getConnection().getRepository(Rating).findOne({where:{id:reference.id}})
    if (!rating) {
        throw new Error("rating reference id invalid")
    }
    return rating
}