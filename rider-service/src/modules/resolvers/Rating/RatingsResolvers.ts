import { Resolver, Query, Arg, Mutation, UseMiddleware } from "type-graphql";
import { Rating } from "../../../entity/Rating";
import RatingInput from "./Input";
import jwtMiddleWare from "../../../middleware/jwtMiddleware";

@Resolver(Rating)
 export default class RatingsResolvers{
    @UseMiddleware(jwtMiddleWare)
    @Query(()=>Rating)
    async riderRatings(@Arg('id') id:string):Promise<Rating| any>{
      const data = await Rating.find({where:{riderId:id}})
      let avg_rating:number = 0
      for(let r of data){
           avg_rating = Number(avg_rating) + Number(r.rating)
      }
      avg_rating = Number((avg_rating/data.length))
      const ratings = avg_rating.toFixed(2)
      return {
        rating:ratings
      };
    }
    @UseMiddleware(jwtMiddleWare)
    @Mutation(()=>Rating)
    async rate_driver(@Arg('data')data:RatingInput):Promise<Rating | any>{
        const rate = await Rating.create(data).save()
        if(!rate) throw new Error("Sorry Some error occurred try again")
        return rate;
    }
}