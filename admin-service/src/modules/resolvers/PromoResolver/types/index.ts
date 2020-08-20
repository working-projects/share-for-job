import { InputType,Field } from "type-graphql";

@InputType()
export class PromoInput{

    @Field()
    title:string;

    @Field()
    description:string;


    @Field()
    promo_code:string;
   
    @Field()
    exp_at:Date;



}