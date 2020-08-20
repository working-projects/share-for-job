import { ObjectType, Field } from "type-graphql";

import { Agency } from '../../../entity/Agency';

@ObjectType()
export class ListAgencyResponse{

    @Field()
    success:boolean

    @Field()
    message:string

    @Field(()=>[Agency])
    data?:Agency[] | undefined


}