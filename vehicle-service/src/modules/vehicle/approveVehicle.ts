import { Resolver, Mutation, Arg } from "type-graphql";
import { ApproveVehicleInput } from './types/approveVehicleInput';
import { getConnection } from "typeorm";
import { Vehicle } from '../../entity/Vehicle';



@Resolver()
export class ApproveVehicle {


    @Mutation(() => Boolean)
    async approveVehicle(@Arg("data") data: ApproveVehicleInput): Promise<boolean> {
        const user = await getConnection()
            .createQueryBuilder()
            .update(Vehicle)
            .set({ status: data.status })
            .where("id = :id", { id: data.userId })
            .execute();
        if (!user) {
            throw new Error(`Vechile does not save`)
        }

        return true
    }
}