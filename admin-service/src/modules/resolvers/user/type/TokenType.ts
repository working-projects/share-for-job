
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class TokenResponse{
    @Field()
    ACCESS_TOKEN:string
    @Field()
    REFRESH_TOKEN:string
}