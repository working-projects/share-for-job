import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class VehicleImage{

    @Field()
    car_img: string

    @Field()
    regCertificate: string

    @Field()
    fitnessPaper: string

    @Field()
    taxToken: string

}