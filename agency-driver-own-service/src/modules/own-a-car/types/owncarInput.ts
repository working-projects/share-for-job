import { InputType, Field } from "type-graphql";
import { Length, IsEmail, Min} from "class-validator";
import { IsPhoneAlreadyExist } from '../../agency/sheared/isPhoneAlreadyExist';
import { IsEmailAlreadyExist } from '../../agency/sheared/isEmailAlreadyExist';




@InputType()
export class RegisterOwnCarInput {

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

    @Length(1,255)
    @Field()
    lisenseForntUrl: string

    @Length(1,255)
    @Field()
    lisenseBackUrl: string

    @Length(11,11)
    @Field()
    @IsPhoneAlreadyExist({message:"phone already use"})
    phoneNumber: string

    @IsEmail()
    @Field()
    @IsEmailAlreadyExist({message:"email already use"})
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