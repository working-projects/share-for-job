import { InputType, Field } from "type-graphql";
import { Length, Min } from "class-validator";

@InputType()
export class SearchAndPaginated{
    
    @Length(1,255)
    @Field()
    name:string

    @Min(0)
    @Field()
    pageNumber:number

    @Min(1)
    @Field()
    limit:number
}