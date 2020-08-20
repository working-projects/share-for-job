import { InputType, Field } from "type-graphql";
import { SENDER_TYPE } from "../../../../enums/SenderType";


@InputType()

export class ClaimsInput{

    @Field()
    senderId:number;

    @Field(()=>SENDER_TYPE)
    sender_type:SENDER_TYPE

    @Field()
    title:string

    @Field()
    details:string

    @Field()
    categoryId:number;

}