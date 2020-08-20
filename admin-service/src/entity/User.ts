import { Entity, PrimaryGeneratedColumn, Column,BaseEntity,JoinTable, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Role } from "./Role";
import { Permission } from "./Permission";
import {IsEmail, isEmail} from 'class-validator';
@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    @Field()
    @IsEmail()
    @Column({unique:true})
    email:string;

    @Field()
    @Column()
    password:string; 

    @Field(()=>[Role])
    @ManyToMany(()=>Role)
    @JoinTable()
    roles:Role[];

    @Field(()=>[Permission])
    @ManyToMany(()=>Permission)
    @JoinTable()
    permissions:Permission[]


}
