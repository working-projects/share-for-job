import { ObjectType, Field, ID} from "type-graphql";

@ObjectType()
export class MessageResponse {
  @Field(()=>ID)
  _id?: string;

  @Field({ nullable: true })
  message?: string;

  @Field()
  senderId?:number;

  @Field()
  receiverId?:number;

  @Field()
  roomId?:number

}