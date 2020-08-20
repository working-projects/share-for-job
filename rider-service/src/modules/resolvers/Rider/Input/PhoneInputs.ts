import { InputType, Field } from "type-graphql";

@InputType()
export default class PhoneInputs{
    @Field()
    phone?:string; 
}