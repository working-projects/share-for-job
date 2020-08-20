import { Rider } from './Rider';
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import { Min } from 'class-validator'

@ObjectType()
@Entity()
export class Rating extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
    
    @Min(0)
    @Field()
    @Column({type:'text'})
    rating: number;
    
    @Column()
    driverId: number;

    @Field(()=>Rider)
    @Column()
    riderId:number;

    @Field(()=>Rider)
    @ManyToOne(type => Rider, rider => rider.ratings)
    rider: Promise<Rider>;
}





