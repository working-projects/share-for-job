import { InputType, Field,} from 'type-graphql';
import { Length, Min } from 'class-validator';


@InputType()
export class VehicleQualityInput{
    
   @Length(1,155)
    @Field({nullable:true})
    name: string;

    @Min(1)
    @Field({nullable:true})
    seat: number;

    @Length(1,255)
    @Field({nullable:true})
    icon_active_url:string
  
    @Length(1,255)
    @Field({nullable:true})
    icon_inactive_url:string

    @Field({nullable:true})
    categoryId:number

}