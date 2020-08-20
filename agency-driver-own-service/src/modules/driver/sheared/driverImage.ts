import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class DriverImage{
    @Field()
    profileImageUrl:string
    
    @Field()
    nidForntUrl:string
    
    @Field()
    nidBackUrl:string
   
    @Field()
    lisenseForntUrl:string
    
    @Field()
    lisenseBackUrl:string
}