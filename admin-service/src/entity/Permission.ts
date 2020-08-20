import { Entity, PrimaryGeneratedColumn, Column,BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class Permission extends BaseEntity {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({unique:true})
    name: string;

    @Field()
    @Column({unique:true})
    slug: string;
    
    @Field(()=>Boolean)
    @Column({default:false})
    status:boolean;

    @Field()
    @Column()
    group:string
    
    @Field()
    @Column({default:new Date(),nullable:true})
    created_at:Date

    @Field()
    @Column({default:new Date(),nullable:true})
    updated_at:Date;

 

}

