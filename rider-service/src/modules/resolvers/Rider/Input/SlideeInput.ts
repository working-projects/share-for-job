import { InputType, Field } from "type-graphql";



@InputType()
export class SliderInput{
    @Field({nullable:true})
    id:number;

    @Field()
    title:string;

    @Field()
    slider_link: string;

    @Field()
    description: string;

    @Field()
    slider_1:string
    
    @Field()
    Slider_2:string
    
    @Field({nullable:true})
    slider_3:string;

    @Field({nullable:true})
    slider_4: string;

    @Field({nullable:true})
    slider_5: string;
    @Field({nullable:true})
    slider_6: string;

    @Field({nullable:true})
    slider_7: string;

    @Field({nullable:true})
    slider_8: string;
  
     
}