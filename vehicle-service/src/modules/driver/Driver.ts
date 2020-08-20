import { Directive, ObjectType, Field, ID } from 'type-graphql';

@Directive("@extends")
@Directive(`@key(fields:"id")`)
@ObjectType()
export class Driver{
    @Directive("@external")
    @Field(type=>ID)
    id:string
}