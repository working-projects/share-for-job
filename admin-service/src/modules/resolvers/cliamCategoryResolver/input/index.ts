import { InputType, Field } from "type-graphql";
import {CATEGORY} from '../../../../enums/ClaimCategoriesType'


@InputType()
class CategoryInput{
  @Field()
  name:string


  @Field()
  description:string


  @Field(()=>CATEGORY)
  category_user:CATEGORY

}


export {CategoryInput}