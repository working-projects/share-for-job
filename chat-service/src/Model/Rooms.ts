import { Resolver, Field, ObjectType, ID } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Rooms {
    @Field(()=>ID)
    readonly _id?: any;

    @Field()
    @prop()
    senderId?:number;

    @Field()
    @prop()
    receiverId?:number
}