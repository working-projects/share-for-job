import { ObjectType, Field } from "type-graphql";

import { Agency } from '../../../entity/Agency';

@ObjectType()
export class ListOwnCarResponse{

    @Field()
    success:boolean

    @Field()
    message:string

    @Field(()=>[Agency])
    data?:Agency[] | undefined


}