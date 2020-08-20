import { ObjectType, Field } from "type-graphql";

import { Driver } from '../../../entity/Driver';

@ObjectType()
export class DetailsDriverResponse{

    @Field()
    success:boolean

    @Field()
    message:string

    @Field(()=>Driver)
    data?:Driver | undefined

}