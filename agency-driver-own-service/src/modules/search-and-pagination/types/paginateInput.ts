import { InputType, Field } from "type-graphql";
import {  Min } from "class-validator";

@InputType()
export class PaginatedInput{
    
    @Min(0)
    @Field()
    pageNumber:number

    @Min(1)
    @Field()
    limit:number
}