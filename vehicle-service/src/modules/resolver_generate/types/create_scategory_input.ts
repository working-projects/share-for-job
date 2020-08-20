import { InputType, Field } from 'type-graphql';
import { Length, Min } from 'class-validator';


@InputType()
export class ServiceCategoryInput{


    @Length(1,155)
    @Field({nullable:true})
    name: string;
  
    @Length(1,255)
    @Field({nullable:true})
    icon_url:string
   



}