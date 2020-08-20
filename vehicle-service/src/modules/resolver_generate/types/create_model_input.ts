import { InputType, Field } from "type-graphql";
import { Status } from '../../types/statusEnumType';
import { Length, Min } from "class-validator";
import { IsModelAlreadyExist } from '../sheared/IsModelNameExist';

@InputType()
export class CreateModelInput{

    @Length(1, 255)
    @IsModelAlreadyExist({message:"This Model Name is already use"})
    @Field({nullable:true})
    name:string
    
    @Min(1)
    @Field({nullable:true})
    brandId:number

}