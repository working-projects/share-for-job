import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Token {
    @Field()
    ACCESS_TOKEN:string;
    @Field()
    REFRESH_TOKEN:string;
    
}