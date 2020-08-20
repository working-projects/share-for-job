import { InputType, Field } from "type-graphql";
import { Length} from "class-validator";



@InputType()
export class OnlineInput {

    @Length(1,255)
    @Field()
    userId: string

    @Field()
    isOnline: boolean

}