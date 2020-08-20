import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class RefreshTokenResponse{

    @Field()
    success:boolean

    @Field()
    message:string

    @Field()
    AccessToken:string

}