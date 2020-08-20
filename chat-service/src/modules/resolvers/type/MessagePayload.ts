import { ObjectId } from "mongodb";

export interface MessagePayload {
    _id?: string;
    message?: string;
    senderId?:number;
    receiverId:number;
    roomId?:number;
  }