import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity } from "typeorm";
import { Status } from '../modules/types/statusEnumType';
import { Driver } from "./Driver";
import { ObjectType, Field, Float, Directive, ID } from 'type-graphql';
import { AgencyImage } from '../modules/agency/sheared/agencyImages';


@Directive(`@key(fields:"id")`)
@ObjectType()
@Entity()
export class Agency extends BaseEntity {

    @Field(()=>ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    company_name: string;

    @Field()
    @Column()
    company_address: string;

    @Field()
    @Column()
    first_name: string;

    @Field()
    @Column()
    last_name: string;

    @Field(()=> AgencyImage,{name:"images"})
    @Column("simple-json")
    images:  { profile_img: string, nid_front: string, nid_back: string, lisense_front: string, lisense_back: string };

    @Field()
    @Column()
    phoneNumber: string

    @Field()
    @Column()
    email: string

    @Field()
    @Column()
    password: string

    @Field()
    @Column()
    present_address: string

    @Field()
    @Column()
    permanent_address: string

    @Field()
    @Column()
    city: string

    @Field()
    @Column({ default: false })
    isOwnACar: boolean

    @Field(()=>Float)
    @Column("float",{default:0})
    rating: number

    @Field({nullable:true})
    @Column("float")
    latitude: number

    @Field({nullable:true})
    @Column("float")
    longitude: number

    @Field()
    @Column({ default: false })
    isOnline: boolean

    @Field(()=>Status)
    @Column("text",{default:"PENDING"})
    status: Status

    @Field()
    @Column("text",{default:"AGENCY"})
    role:string

    @Column("int",{default:0})
    tokenVersion:number

    @Field()
    @CreateDateColumn({ name: 'createed_at' })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    @Field()
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date

    @Field(()=> [Driver])
    @OneToMany(() => Driver, drivers => drivers.agency)
    drivers: Promise<Driver[]>

    
}
