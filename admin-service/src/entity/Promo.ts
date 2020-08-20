import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Promo extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    title:string;

    @Field()
    @Column()
    description:string;


    @Field()
    @Column('text')
    promo_code:string;

    @Field()
    @Column('timestamp',{default:new Date()})
    create_at:Date;
  
    @Field()
    @Column('timestamp',{nullable:false})
    exp_at:Date;

    @Field()
    @Column('timestamp',{default:new Date()})
    updated_at:Date;

}
