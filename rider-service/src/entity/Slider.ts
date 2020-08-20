import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field } from 'type-graphql';
import {SliderImages} from '../modules/resolvers/Rider/Input/SiderImages';

@ObjectType()
@Entity()
export class Slider extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({type:'text',nullable:true})
    title:string;

    @Field()
    @Column({type:"text",nullable:true})
    slider_link: string;

    @Field()
    @Column({type:"text",nullable:true})
    description: string;

    @Field(()=>SliderImages,{name:'images'})
    @Column('simple-json',{nullable:true})
    images:{ 
        slider_1: string, 
        slider_2: string, 
        slider_3: string,
        slider_4: string,
        slider_5: string,
        slider_6: string,
        slider_7: string,
        slider_8: string
    };

}





