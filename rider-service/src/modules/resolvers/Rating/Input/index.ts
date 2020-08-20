
import { InputType, Field } from "type-graphql";

@InputType()
export default class RatingInput{
    @Field()
    rating:number;

    @Field()
    driverId:number;

    @Field()
    riderId:number;
}