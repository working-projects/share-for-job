import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { ObjectType, Field, Float, Directive, ID } from 'type-graphql';
import { Driver } from './Driver';

@Directive(`@key(fields:"id")`)
@ObjectType()
@Entity("ratings")
export class ADRating extends BaseEntity{

    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field(()=>Float)
    @Column("float")
    ratingValue:number

    @Field()
    @Column()
    riderId:string

    @Field(() =>Driver)
    @Column({nullable:true})
    driverId: string

     @Field()
    @CreateDateColumn({ name: 'createed_at' })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    @Field()
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date

    @ManyToOne(() => Driver, driver => driver.ratings, {
        cascade:true,
        onDelete:"CASCADE",
        nullable:true
    })
    driver: Promise<Driver>

    
}