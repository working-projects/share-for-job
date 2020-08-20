import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Status } from '../modules/types/statusEnumType';
import { Vehicle } from './Vehicle';
import { VehicleQualityPrice } from './VehicleQuality';


@ObjectType()
@Entity("vehicle_categories")
export class VehicleCategory extends BaseEntity{


    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    seat: number;

    @Field()
    @Column()
    icon_active_url:string
   
    @Field()
    @Column()
    icon_inactive_url:string

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

    @Field(()=>[VehicleQualityPrice])
    @OneToMany(type => VehicleQualityPrice, qualities => qualities.category)
    qualities:Promise<Vehicle[]>

    @Field(()=>[Vehicle])
    @OneToMany(type => Vehicle, vehicles => vehicles.vehicleCategory)
    vehicles:Promise<Vehicle[]>

}