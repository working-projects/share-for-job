import { InputType, Field } from "type-graphql";
import { Length} from "class-validator";


@InputType()
export class LoginInput {

   
    @Length(1,11)
    @Field()
    phoneNumber: string

    @Length(6,20)
    @Field()
    password: string

}