import { InputType, Field } from "type-graphql";
import { Length, } from "class-validator";
import { IsPhoneAlreadyExist } from '../sheared/isPhoneAlreadyExist';

@InputType()
export class RegisterDriverInput {

    @Length(1,255)
    @Field()
    first_name: string;

    @Length(1,255)
    @Field()
    last_name: string;

    @Length(1,255)
    @Field()
    profileImageUrl: string

    @Length(1,255)
    @Field()
    nidForntUrl: string

    @Length(1,255)
    @Field()
    nidBackUrl: string

    @Length(1,255)
    @Field()
    lisenseForntUrl: string

    @Length(1,255)
    @Field()
    lisenseBackUrl: string

    @Length(11,11)
    @IsPhoneAlreadyExist({message:"Phone Number already use"})
    @Field()
    phoneNumber: string

    @Length(6,20)
    @Field()
    password: string

    @Length(1,255)
    @Field()
    present_address: string

    @Length(1,255)
    @Field()
    permanent_address: string

    @Length(1,255)
    @Field()
    city: string

}