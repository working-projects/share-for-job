import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, BaseEntity, OneToMany } from 'typeorm';
import { Field, ObjectType } from "type-graphql";
import { Status } from '../modules/types/statusEnumType';
import { VehicleBrand } from './VehicleBrand';
import { Vehicle } from './Vehicle';

@ObjectType()
@Entity("vehicles_models")
export class VehicleModel extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

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

   
    @Column()
    brandId:number

    @Field(()=>VehicleBrand,{name:"brand"})
    @ManyToOne(type => VehicleBrand, brand => brand.models , {
        cascade:true,
        onDelete:"CASCADE",
        nullable:true
    })
    brand: Promise<VehicleBrand>

    @Field(()=>[Vehicle])
    @OneToMany(type => Vehicle, vehicles => vehicles.model)
    vehicles:Promise<Vehicle[]>
}
