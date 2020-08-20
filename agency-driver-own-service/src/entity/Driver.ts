import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Status } from '../modules/types/statusEnumType';
import { Agency } from './Agency';
import { ObjectType, Field, Float, Directive, ID } from 'type-graphql';
import { DriverImage } from '../modules/driver/sheared/driverImage';
import { ADRating } from './Rating';

@ObjectType()
@Directive(`@key(fields:"id")`)
@Entity()
export class Driver extends BaseEntity {

    @Field(()=>ID)
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column()
    first_name: string;

    @Field()
    @Column()
    last_name: string;

    @Field(() => DriverImage)
    @Column("simple-json")
    images: { profile_img: string, nid_front: string, nid_back: string, lisense_front: string, lisense_back: string };

    @Field()
    @Column()
    phoneNumber: string

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

    @Field(()=>Float)
    @Column("float", { default: 0 })
    rating: number

    @Field()
    @Column({ default: false })
    isOnline: boolean

    @Field(() => Status)
    @Column("text", { default: "PENDING" })
    status: Status

    @Column("int",{default:0})
    tokenVersion:number

    @Field()
    @Column("text",{default:"DRIVER"})
    role:string

    @Field()
    @CreateDateColumn({ name: 'createed_at' })
    createdAt: Date

    @Field()
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date

    @Field()
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date

    @Field(() => Agency)
    @Column({nullable:true})
    agencyId: string

    @ManyToOne(() => Agency, agency => agency.drivers, {
        onDelete:"SET NULL",
        nullable:true
    })
    agency: Promise<Agency>

    @Field(()=> [ADRating])
    @OneToMany(() => ADRating, ratings => ratings.driver)
    ratings: Promise<ADRating[]>
    
}
