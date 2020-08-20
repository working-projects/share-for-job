import { ObjectType, Field } from "type-graphql";
import { Agency } from '../../../entity/Agency';
import { ADToken } from '../../types/tokenType';

@ObjectType()
export class LoginResponse{

    @Field()
    success:boolean

    @Field()
    message:string

    @Field(()=>Agency)
    data?:Agency | undefined

    @Field(()=> ADToken)
    token:ADToken

}