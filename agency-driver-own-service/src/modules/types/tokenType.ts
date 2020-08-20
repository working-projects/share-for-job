
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class ADToken{

    @Field()
    tokenType:string
    @Field()
    accessToken:string

    @Field()
    refreshToken:string
    
}