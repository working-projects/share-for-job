import { InputType, Field } from "type-graphql";


@InputType()
export class PermissionInputs{
    @Field()
    name:string

    @Field()
    slug:string

    @Field()
    status:boolean

    @Field()
    group:string
}