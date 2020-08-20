import { InputType, Field, Float } from 'type-graphql';
import { RangeArea } from '../../types/RangeEnumType';


@InputType()
export class ServicePriceInput{

    @Field(()=>Float,{nullable:true})
    bodyPrice:number;
   
    @Field(()=>Float,{nullable:true})
    bodyPriceWithDriver:number;
   
    @Field(()=>Float,{nullable:true})
    minPrice:number;
   
    @Field(()=>Float,{nullable:true})
    kmPrice:number;

    @Field(() => RangeArea,{nullable:true})
    range: RangeArea

    @Field({nullable:true})
    serviceId:number

    @Field({nullable:true})
    vehicleQualityId:number

}