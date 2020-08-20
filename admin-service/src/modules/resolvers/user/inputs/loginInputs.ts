import { InputType, Field } from "type-graphql";

@InputType()
export class LoginInputs{
    @Field()
    email:string;
    @Field()
    password:string
}