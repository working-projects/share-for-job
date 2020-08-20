
import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Promo } from '../../../entity/Promo';
import { PromoInput } from "./types";

@Resolver(Promo)
export class PromosResolver {
    @Mutation(() => Promo)
    async createPromoCode(@Arg('data') data: PromoInput): Promise<Promo> {
        const promo = await Promo.create(data).save()
        if (!promo) throw new Error("Sorry! sir I can not create your promo code")
        return promo;
    }
    @Query(() => Promo)
    async PromoFindById(@Arg('id') id: PromoInput): Promise<Promo> {
        const promo = await Promo.findOne(id)
        if (!promo) throw new Error("Sorry! provided id does not contain any promo code")
        return promo;
    }

    @Query(() => [Promo])
    async PromosCodes(): Promise<Promo[]> {
        const promo = await Promo.find()
        if (!promo) throw new Error("Not data Found")
        return promo;
    }

    @Query(() => [Promo])
    async FindByPromoCode(@Arg('code') code: string): Promise<Promo> {
        const promo = await Promo.findOne({ where: { promo_code: code } })
        if (!promo) throw new Error("Not data Found")
        return promo;
    }
}