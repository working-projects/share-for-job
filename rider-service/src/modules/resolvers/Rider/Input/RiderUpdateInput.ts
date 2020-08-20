import { InputType, Field } from "type-graphql";



@InputType()
export class RiderUpdateInput{
    @Field({nullable:true})
    id:number

    @Field({nullable:true})
    firstName: string;

    @Field({nullable:true})
    lastName: string;

    @Field({nullable:true})
    phone: string;

    @Field({nullable:true})
    email:string;

    @Field({nullable:true})
    dob:Date

    @Field({nullable:true})
    profileImg: string

    @Field({nullable:true})
    nidFront: string

    @Field({nullable:true})
    nidBack: string

    @Field({nullable:true})
    isActive:boolean
  
     
}