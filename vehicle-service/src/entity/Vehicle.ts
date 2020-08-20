import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ObjectType, Field, Directive, ID } from 'type-graphql';
import { Agency } from '../modules/agency/Agency';
import { VehicleCategory } from './VehicleCategory';
import { Driver } from '../modules/driver/Driver';
import { Status } from '../modules/types/statusEnumType';
import { VehicleBrand } from './VehicleBrand';
import { VehicleModel } from './VehicleModel';
import { VehicleQualityPrice } from './VehicleQuality';
import { VehicleImage } from '../modules/vehicle/types/vehicleImage';

@Directive(`@key(fields:"id")`)
@ObjectType()
@Entity("vehicles")
export class Vehicle extends BaseEntity{

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name:string
   
    @Field()
    @Column({unique:true})
    carNumber:string

    @Field()
    @Column({nullable:true})
    color:string

    @Field()
    @Column({nullable:true})
    cc:number

    @Field()
    @Column()
    mfg_year:string

    @Field()
    @Column()
    seats:number

    @Field(()=>VehicleImage)
    @Column("simple-json")
    images: { car_img: string, regCertificate: string, fitnessPaper: string, taxToken: string};


    @Field(() => Status)
    @Column("text", { default: "PENDING" })
    status: Status


    @Field(()=> Agency,{name:"agency"})
    @Column({nullable:true})
    agencyId:string
   
    @Field(()=> Driver,{name:"driver"})
    @Column({nullable:true})
    driverId:string


    @Column()
    vehicleCategoryId:number
    
    
    @Column()
    vehicleQualityId:number
    
    
    @Column()
    brandId:number
   
   
    @Column()
    modelId:number



    @Field()
    @CreateDateColumn({ name: 'createed_at' })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    @Field()
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date

    @Field(()=>VehicleCategory)
    @ManyToOne(type => VehicleCategory, vehicleCategory => vehicleCategory.vehicles,{onDelete:"SET NULL", nullable:true})
    vehicleCategory:Promise<VehicleCategory>
    
    @Field(()=>VehicleQualityPrice,{name:"quality"})
    @ManyToOne(type => VehicleQualityPrice, vehicleQuality => vehicleQuality.vehicles,{onDelete:"SET NULL", nullable:true})
    vehicleQuality:Promise<VehicleQualityPrice>
  
    @Field(()=>VehicleBrand)
    @ManyToOne(type => VehicleBrand, brand => brand.vehicles,{onDelete:"SET NULL", nullable:true})
    brand:Promise<VehicleBrand>
   
    @Field(()=>VehicleModel)
    @ManyToOne(type => VehicleModel, model => model.vehicles,{onDelete:"SET NULL", nullable:true})
    model:Promise<VehicleModel>



    


}