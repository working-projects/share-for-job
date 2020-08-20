import { InputType, Field } from "type-graphql";
import { Length, IsEmail, Min} from "class-validator";


@InputType()
export class UpdateAgencyInput {


    // @Length(1,155)
    // @Field()
    // agencyId:string

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
    @Field()
    phoneNumber: string

    @IsEmail()
    @Field()
    email: string

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