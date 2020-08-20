import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, BaseEntity} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Status } from '../modules/types/statusEnumType';
import { VehicleModel } from "./VehicleModel";
import { Vehicle } from './Vehicle';

@ObjectType()
@Entity("vehicles_brands")
export class VehicleBrand extends BaseEntity {

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

    @Field(()=> [VehicleModel])
    @OneToMany(type => VehicleModel, models => models.brand)
    models: Promise<VehicleModel[]>

    @Field(()=>[Vehicle])
    @OneToMany(type => Vehicle, vehicles => vehicles.brand)
    vehicles:Promise<Vehicle[]>
}
