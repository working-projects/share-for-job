import { InputType, Field } from 'type-graphql';
import { Length, Min } from 'class-validator';


@InputType()
export class VehicleInput {

    @Length(1, 255, { message: "Enter Vehicle Name" })
    @Field({nullable:true})
    name: string

    @Length(1, 255, { message: "Enter Vehicle Number" })
    @Field({nullable:true})
    carNumber: string

    @Length(1, 255, { message: "Enter Vehicle Color" })
    @Field({nullable:true})
    color: string

    @Min(1,{ message: "Enter Vehicle CC" })
    @Field({nullable:true})
    cc: number

    @Length(1, 255, { message: "Enter Vehicle year" })
    @Field({nullable:true})
    mfg_year: string

    @Min(1, { message: "Enter how many Vehicle seat" })
    @Field({nullable:true})
    seats: number

    @Field()
    car_imgUrl: string
    
    @Field({nullable:true})
    regCertificateUrl: string
    
    @Field({nullable:true})
    fitnessPaperUrl: string
    
    @Field({nullable:true})
    taxTokenUrl: string 

    @Field({nullable:true})
    vehicleCartegoryId: number

    @Field({nullable:true})
    vehicleQualityId:number

    @Field({nullable:true})
    brandId: number

    @Field({nullable:true})
    modelId: number

    @Field({nullable:true})
    agencyId:string
}