import { InputType, Field } from "type-graphql";

@InputType()
export class RoleAssignType{
    @Field()
    userId:number;
    @Field()
    roleId:number;
}