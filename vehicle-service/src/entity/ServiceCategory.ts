import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { ServicePrice } from './ServicePrice';
import { Status } from '../modules/types/statusEnumType';


@ObjectType()
@Entity("service_categories")
export class ServiceCategory extends BaseEntity{


    @Field()
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name: string;
    
    @Field()
    @Column()
    icon_url:string

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
    @OneToMany(type => ServicePrice, prices => prices.service ) // specify inverse side as a second parameter
    prices: Promise<ServicePrice[]>;
}