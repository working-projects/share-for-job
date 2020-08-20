import { Resolver, Mutation, Arg, UseMiddleware, Query } from "type-graphql";
import { ADRatingInput } from './types/ratingInput';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Driver } from '../../entity/Driver';
import { ADRating } from '../../entity/Rating';
import { getRepository } from "typeorm";
import { Agency } from '../../entity/Agency';




@Resolver()
export class RatingResolver {


    @Mutation(() => Boolean)
    @UseMiddleware(isAuthMiddleware)
    async createRating(@Arg("data") { rating, riderId, driverId }: ADRatingInput): Promise<boolean> {

        const driver = await Driver.findOne({ where: { id: driverId } })

        if (!driver) {
            throw new Error("Driver not found")
        }


        await ADRating.insert({
            ratingValue: rating,
            riderId,
            driverId
        }).then(async rating => {
            console.log("rating:" + rating);
            this.addRatingDriver(driver)
        })


        return true
    }

    @Mutation(() => ADRating)
    @UseMiddleware(isAuthMiddleware)
    async updateRating(@Arg("ratingId") id: Number, @Arg("data") { rating, riderId, driverId }: ADRatingInput): Promise<ADRating> {
        const rate = await ADRating.findOne({ where: { id } })

        if (!rate) {
            throw new Error("rating not found")
        }
        Object.assign(rate, {
            ratingValue: rating,
            riderId,
            driverId
        });

        await rate.save()

        return rate

    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuthMiddleware)
    async deleteRating(@Arg("ratingId") id: number): Promise<boolean> {
        const rate = await ADRating.findOne({ where: { id } })
        if (!rate) {
            throw new Error("rating not found")
        }

        await rate.remove()

        return true
    }



    @Query(() => ADRating)
    @UseMiddleware(isAuthMiddleware)
    async ratingOne(@Arg("ratingId") id: number): Promise<ADRating> {
        const rate = await ADRating.findOne({ where: { id } })
        if (!rate) {
            throw new Error("rating not found")
        }

        return rate
    }

    @Query(() => [Driver])
    @UseMiddleware(isAuthMiddleware)
    async topRatingDriver(): Promise<Driver[] | undefined> {

        const result = await getRepository(Driver)
            .createQueryBuilder("l")
            .select("*")
            .addSelect("MAX(l.rating)", "max")
            .groupBy("l.id")
            .orderBy("l.rating", "DESC")
            .getRawMany()
       
        return result
    }

    @Query(() => [Agency])
    @UseMiddleware(isAuthMiddleware)
    async topRatingAgency(): Promise<Agency[] | undefined> {

        const result = await getRepository(Agency)
            .createQueryBuilder("l")
            .select("*")
            .addSelect("MAX(l.rating)", "max")
            .groupBy("l.id")
            .orderBy("l.rating", "DESC")
            .getRawMany()
       
        return result

    }



    async addRatingDriver(driver: Driver) {


        const n = await ADRating.count({ where: { driverId: driver.id } })

        const { sum } = await getRepository(ADRating)
            .createQueryBuilder("l")
            .select("SUM(l.ratingValue)", "sum")
            .where("l.driverId = :id", { id: driver.id })
            .getRawOne();

        console.log(`count : ${n}, sum : ${sum} avg : ${sum / n}`);

        let avgRating = sum / n

        Object.assign(driver, {
            rating: avgRating.toFixed(2)
        })
        await driver.save().then(async d => {
            this.addRatingAgency(d)
        })
    }

    async addRatingAgency(driver: Driver) {


        const { length } = await Driver.findAndCount({ where: { id: driver.agencyId } })
        const { sum } = await getRepository(Driver)
            .createQueryBuilder("l")
            .select("SUM(l.rating)", "sum")
            .where("l.agencyId = :id", { id: driver.agencyId })
            .getRawOne();

        if (!sum) {
            throw new Error("agency not found ")
        }

        console.log(`Agency count : ${length}, sum : ${sum} avg : ${sum / length}`);

        let avgRating = (sum / length).toFixed(2)

        const agency = await Agency.findOne({ where: { id: driver.agencyId } })

        Object.assign(agency, {
            rating: avgRating
        })
        await agency?.save()


    }

}