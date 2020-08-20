import {
  Resolver,
  Mutation,
  Arg,
  PubSub,
  Root,
  Subscription,
  ResolverFilterData,
} from "type-graphql";
import { MessageModel} from "../../Model/Message";
import MessageInput from "./type/MessageSendInput";
import { PubSubEngine } from "graphql-subscriptions";
import { MessagePayload } from "./type/MessagePayload";
import { MessageResponse } from "./type/MessageResponse";

@Resolver()
export class ChatResolver {
  @Mutation(() => Boolean)
  async sendMessage(
    @PubSub() pubSub: PubSubEngine,
    @Arg("data") data: MessageInput
  ): Promise<boolean> {
    try {
      const payload = await MessageModel.create(data);
      await pubSub.publish("MESSAGE", payload);
      return true;
    } catch (error) {
      return false;
    }
  }

  @Subscription(()=>MessageResponse,{ topics: "MESSAGE"})
    async messages(@Root() { _id, message,senderId,receiverId,roomId }: MessagePayload):Promise<MessageResponse | any>{
       return { _id, message,senderId,receiverId,roomId }
    }


}
