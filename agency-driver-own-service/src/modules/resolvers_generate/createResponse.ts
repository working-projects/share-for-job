import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class CreateResponse{
    @Field()
    success:boolean
    @Field()
    message:string
}