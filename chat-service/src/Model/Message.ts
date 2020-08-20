import { ObjectType, Field,ID } from "type-graphql";
import { prop,getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Messages {
    @Field(()=>ID)
    readonly _id?: string;

    @Field()
    @prop()
    public message?:string;

    @Field()
    @prop()
    public senderId?: number;

    @Field()
    @prop()
    public receiverId?: number;

    @Field()
    @prop()
    public roomId?:number;
}

export const MessageModel = getModelForClass(Messages);