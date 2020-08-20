import { InputType, Field } from "type-graphql";

@InputType()
export class PermissionAssignType{
    @Field()
    userId:number;

    @Field()
    permissionId:number;
}