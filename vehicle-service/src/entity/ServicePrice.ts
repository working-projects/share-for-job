import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, BaseEntity, OneToOne, ManyToOne } from 'typeorm';
import { Field, ObjectType, Float } from "type-graphql";
import { ServiceCategory } from './ServiceCategory';
import { VehicleQualityPrice } from './VehicleQuality';
import { Status } from '../modules/types/statusEnumType';
import { RangeArea } from '../modules/types/RangeEnumType';

@ObjectType()
@Entity("service_prices")
export class ServicePrice extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field(()=>Float)
    @Column("float",{default:0})
    bodyPrice:number;
   
    @Field(()=>Float)
    @Column("float",{default:0})
    bodyPriceWithDriver:number;

    @Field(()=>Float)
    @Column("float",{default:0})
    minPrice:number;
   
    @Field(()=>Float)
    @Column("float",{default:0})
    kmPrice:number;


    @Field(() => RangeArea)
    @Column("text", { default: "ALL" })
    range: RangeArea

    @Column()
    serviceId:number

    @Column()
    vehicleQualityId:number
    
    @Field(() => Status)
    @Column("text", { default: "ACTIVE" })
    status: Status
    
    
    @Field(()=>ServiceCategory, {name:"serviceCategory"})
    @ManyToOne(type => ServiceCategory, service => service.prices, {onDelete:"SET NULL", nullable:true})
    service:Promise<ServiceCategory>

    @Field(()=> VehicleQualityPrice,{name:"quality"})
    @ManyToOne(type => VehicleQualityPrice, vehicleQuality => vehicleQuality.prices,{onDelete:"SET NULL", nullable:true}) // specify inverse side as a second parameter
    vehicleQuality:Promise<VehicleQualityPrice>;


    @Field()
    @CreateDateColumn({ name: 'createed_at' })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    @Field()
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date

   
}
