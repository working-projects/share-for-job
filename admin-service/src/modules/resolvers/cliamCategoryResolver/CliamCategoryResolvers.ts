import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { ClaimCategories } from "../../../entity/ClaimCategories";
import {CategoryInput} from './input'
@Resolver(ClaimCategories)

export class CliamCategoriesResolvers{
    @Mutation(()=>ClaimCategories)
    async  createCategory(@Arg('data')data:CategoryInput):Promise<ClaimCategories | any> {
        const category = await ClaimCategories.create(data).save()
        if(!category) throw new Error("Category create failed")
        return category
    }


    @Query(()=>ClaimCategories)
    async  showCategory(@Arg('id')id:number):Promise<ClaimCategories | any> {
        const category = await ClaimCategories.find({where:{id}});
        if(!category) throw new Error("Category create failed")
        return category
    }


    @Mutation(()=>ClaimCategories)
    async  updateCategory(@Arg('id')id:number,@Arg('data')data:CategoryInput):Promise<ClaimCategories | any> {
        const category = await ClaimCategories.createQueryBuilder().update(data).set(data).where("id = :id", {id:id}).execute()
        if(!category) throw new Error("Category update failed")
        return category
    }

    

    @Mutation(()=>ClaimCategories)
    async  deleteCategory(@Arg('id')id:number):Promise<ClaimCategories | any> {
        const category = await ClaimCategories.delete({id})
        if(!category) throw new Error("Category delete failed")
        return category
    }




}