import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ObjectType, Field} from "type-graphql";
import { SENDER_TYPE } from "../enums/SenderType";
import { ClaimCategories } from "./ClaimCategories";


@ObjectType()
@Entity()
export class Claim extends BaseEntity{
    
    @Field()
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    senderId:number;

    @Field()
    @Column()
    file_url:string;

    @Field(()=>SENDER_TYPE)
    @Column("text",{default:SENDER_TYPE.RIDER})
    sender_type:SENDER_TYPE

    @Field()
    @Column()
    title:string

    @Field()
    @Column('text')
    details:string

    @Field()
    @Column()
    created_at:Date

    @Field()
    @Column()
    updated_at:Date

    @Column()
    categoryId:number;

    @Field(()=>ClaimCategories)
    @ManyToOne(type=> ClaimCategories, category=>category.claim,{
        nullable:true,
        cascade:true,
        onDelete:"CASCADE"
    })
    category:Promise<ClaimCategories>
}