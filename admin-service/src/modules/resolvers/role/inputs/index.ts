import { InputType, Field } from "type-graphql";


@InputType()
export class RolesInputs{
    @Field()
    name:string

    @Field()
    slug:string

    @Field()
    status:boolean;

    @Field()
    group:string
}