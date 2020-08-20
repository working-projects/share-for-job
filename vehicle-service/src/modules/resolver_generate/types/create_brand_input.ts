import { InputType, Field } from "type-graphql";
import { Status } from '../../types/statusEnumType';
import { Length } from "class-validator";
import { IsBrandAlreadyExist } from "../sheared/IsBrandNameExist";

@InputType()
export class CreateBrandInput{

    @Length(1, 255)
    @IsBrandAlreadyExist({message:"This Brand Name is already use"})
    @Field()
    name:string
    

}