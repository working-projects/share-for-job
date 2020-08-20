import { Entity, PrimaryGeneratedColumn, Column,BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Role extends BaseEntity {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(()=>String)
    @Column({unique:true})
    name: string;

    @Field(()=>String)
    @Column({unique:true})
    slug: string;

    @Column({nullable:false,default:false})
    @Field(()=>Boolean)
    status:boolean;

    @Field()
    @Column({nullable:false})
    group:String;
    
    @Field()
    @Column({default:new Date(),nullable:true})
    created_at:Date

    @Field()
    @Column({default:new Date(),nullable:true})
    updated_at:Date;

}
