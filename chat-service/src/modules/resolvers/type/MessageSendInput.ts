import { InputType, Field, ID } from "type-graphql";


@InputType()
export default class MessageInput{
  
    @Field()
    message?:string

    @Field()
    senderId?:number;

    @Field()
    receiverId?:number;

    @Field()
    roomId?:number;
}