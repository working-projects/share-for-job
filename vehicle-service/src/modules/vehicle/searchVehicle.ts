import { Resolver, Query, Arg, UseMiddleware } from "type-graphql";
import { getConnection } from 'typeorm';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { Vehicle } from '../../entity/Vehicle';
import { SearchAndPaginated } from '../resolver_generate/types/searchAndPaginated';


@Resolver()
export class SearchVehicleResolver {

  @Query(() => [Vehicle])
  @UseMiddleware(isAuthMiddleware)
  async searchVehicle(@Arg("data") {name, pageNumber, limit}: SearchAndPaginated): Promise<Vehicle[]> {

    if (!name) {
        throw new Error("Search mustn't be null")
    }
   
    const searchFormDb = await getConnection()
    .getRepository(Vehicle)
    .createQueryBuilder("l")
    .orWhere("l.name ilike :name ",{name:`%${name}%`})
    .orWhere("l.color ilike :name ",{name:`%${name}%`})
    .orWhere("l.carNumber ilike :name ",{name:`%${name}%`})
    .orWhere("l.mfg_year ilike :name ",{name:`%${name}%`})
   


    if (!searchFormDb) {
        throw new Error("Sorry , not Found!!")
    }

    

    return searchFormDb.take(limit).skip(pageNumber).getMany()
  }


 
  
}