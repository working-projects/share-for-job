import { Resolver, Query, UseMiddleware } from "type-graphql";
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Agency } from '../../entity/Agency';
import { ListOwnCarResponse } from './types/listOfOwnCarResponse';



@Resolver()
export class ListOwnCarResolver {

    @Query(() => ListOwnCarResponse)
    @UseMiddleware(isAuthMiddleware)
    async listOwnCar(){
        const owncars = await Agency.find({ where: { isOwnACar: true } })
        if (!owncars) {
            throw new Error(`OwnCar User data not found`)
        }

        return {
            success: true,
            message: "Save Successfuly",
            data: owncars
        }
    }


}