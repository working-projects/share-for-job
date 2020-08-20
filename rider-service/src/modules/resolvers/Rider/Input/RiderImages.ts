import { ObjectType, Field } from "type-graphql";

@ObjectType()
export  class RiderImage{
    @Field()
    profileImg:string
    
    @Field()
    nidFront:string
    
    @Field()
    nidBack:string
}