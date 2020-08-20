import { ObjectType, Field } from "type-graphql";
import { ADToken } from '../../types/tokenType';
import { Driver } from '../../../entity/Driver';

@ObjectType()
export class LoginDriverResponseType{

    @Field()
    success:boolean

    @Field()
    message:string

    @Field(()=>Driver)
    data?:Driver | undefined

    @Field(()=> ADToken)
    token:ADToken

}