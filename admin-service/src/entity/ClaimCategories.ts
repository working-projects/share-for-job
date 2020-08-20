import { Entity, BaseEntity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Claim } from "./Claim";
import { CATEGORY } from '../enums/ClaimCategoriesType'

@ObjectType()
@Entity()
export class ClaimCategories extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Field()
    @Column()
    name:string;

    @Field()
    @Column()
    description:string;


    @Field(()=>CATEGORY)
    @Column("text",{default:CATEGORY.RIDER})
    category_user:CATEGORY;

    @Field()
    @Column('timestamp',{default:new Date()})
    created_at:Date;

    @Field()
    @Column('timestamp',{default:new Date()})
    updated_at:Date;
    
    @Field(()=>[Claim])
    @OneToMany(type => Claim, cliams => cliams.category)
    claim: Promise<Claim[]>;
}