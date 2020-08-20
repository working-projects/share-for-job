import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class RegisterResponse{
    @Field()
    success:boolean
    @Field()
    message:string
}