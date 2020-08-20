import { Rating } from './Rating';
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import {RiderImage} from '../modules/resolvers/Rider/Input/RiderImages';

@ObjectType()
@Entity()
export class Rider extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({type:"text",nullable:true})
    firstName: string;

    @Field()
    @Column({type:"text",nullable:true})
    lastName: string;

    @Field()
    @Column({type:'text',unique:true, nullable:false})
    phone: string;

    @Field()
    @Column({type:"text",nullable:true})
    email:string
   
    @Field()
    @Column({type:"date", nullable:true})
    dob:Date

    @Field(()=>RiderImage,{name:'images'})
    @Column('simple-json',{nullable:true})
    images:{ profile_img: string, nid_front: string, nid_back: string};

    @Field()
    @Column({type:"boolean",nullable:true})
    isActive:boolean

    @Field(()=>[Rating])
    @OneToMany(type => Rating, ratings => ratings.rider)
    ratings: Promise<Rating[]>;
}





