import { InputType, Field } from "type-graphql";
import { Length, Min } from "class-validator";

@InputType()
export class ADRatingInput{

    @Length(1,155)
    @Field()
    riderId:string

    @Min(0.5)
    @Field()
    rating:number

    @Length(1,155)
    @Field()
    driverId:string
}