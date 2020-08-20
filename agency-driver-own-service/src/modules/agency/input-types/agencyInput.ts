import { InputType, Field } from "type-graphql";
import { Length, IsEmail, Min} from "class-validator";
import { IsPhoneAlreadyExist } from "../sheared/isPhoneAlreadyExist";
import { IsEmailAlreadyExist } from "../sheared/isEmailAlreadyExist";



@InputType()
export class RegisterAgencyInput {

    @Length(1,255)
    @Field()
    company_name: string;

    @Length(1,255)
    @Field()
    company_address: string;

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

    @Length(11,11)
    @IsPhoneAlreadyExist({message:"Phone Number already use"})
    @Field()
    phoneNumber: string

    @IsEmail()
    @IsEmailAlreadyExist({message:"Email already use"})
    @Field()
    email: string

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

    @Min(0)
    @Field()
    latitude: number

    @Min(0)
    @Field()
    longitude: number

}