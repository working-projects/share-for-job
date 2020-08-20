import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Status } from '../modules/types/statusEnumType';
import { ServicePrice } from './ServicePrice';
import { Vehicle } from './Vehicle';
import { VehicleCategory } from './VehicleCategory';


@ObjectType()
@Entity("vehicle_quality")
export class VehicleQualityPrice extends BaseEntity{


    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    icon_active_url:string
    
    @Field()
    @Column()
    icon_inactive_url:string

    @Column()
    priceId:number

    @Column()
    categoryId:number
    
    
    @Field(() => Status)
    @Column("text", { default: "ACTIVE" })
    status: Status
    
    @Field()
    @CreateDateColumn({ name: 'createed_at' })
    createdAt: Date
    
    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date
    
    @Field()
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date
    

    @Field(()=>[ServicePrice])
    @OneToMany(type => ServicePrice,prices => prices.vehicleQuality)
    prices: Promise<ServicePrice[]>
    
    @Field(()=>VehicleCategory)
    @ManyToOne(type => VehicleCategory, cartegory => cartegory.qualities , {
        onDelete:"SET NULL",
        nullable:true
    })
    category: Promise<VehicleCategory>

    @Field(()=>[Vehicle])
    @OneToMany(type => Vehicle, vehicles => vehicles.vehicleQuality)
    vehicles:Promise<Vehicle[]>
}