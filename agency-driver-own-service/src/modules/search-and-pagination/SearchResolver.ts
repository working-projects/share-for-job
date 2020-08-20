import { Resolver, Query, Arg, UseMiddleware } from "type-graphql";
import {  SearchDriverResult } from "./types/agencySearchResult";
import { Agency } from '../../entity/Agency';
import { getConnection } from 'typeorm';
import { SearchAndPaginated } from "./types/searchAndPaginated";
import { Driver } from '../../entity/Driver';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';

@Resolver()
export class SearchResolver {
  @Query(() => [Agency])
  @UseMiddleware(isAuthMiddleware)
  async searchAgency(@Arg("data") {name, pageNumber, limit}: SearchAndPaginated): Promise<Agency[]> {

    if (!name) {
        throw new Error("Search mustn't be null")
    }
   
    const searchFormDb = await getConnection()
    .getRepository(Agency)
    .createQueryBuilder("l")
    .orWhere("l.phoneNumber ilike :phone ",{phone:`%${name}%`})
    .orWhere("l.first_name ilike :name ",{name:`%${name}%`})
    .orWhere("l.company_name ilike :company ",{company:`%${name}%`})
    .orWhere("l.company_address ilike :address ",{address:`%${name}%`})
    .orWhere("l.city ilike :city ",{city:`%${name}%`})
    


    if (!searchFormDb) {
        throw new Error("Sorry , not Found!!")
    }

    

    return searchFormDb.take(limit).skip(pageNumber).getMany()
  }


  
  @Query(() => [Driver])
  @UseMiddleware(isAuthMiddleware)
  async searchDriver(@Arg("data") {name, pageNumber, limit}: SearchAndPaginated): Promise<Array<typeof SearchDriverResult>> {

    if (!name) {
        throw new Error("Search mustn't be null")
    }
   
    const searchFormDb = await getConnection()
    .getRepository(Driver)
    .createQueryBuilder("l")
    .orWhere("l.phoneNumber ilike :phone ",{phone:`%${name}%`})
    .orWhere("l.first_name ilike :name ",{name:`%${name}%`})
    .orWhere("l.first_name ilike :name ",{name:`%${name}%`})
    
    


    if (!searchFormDb) {
        throw new Error("Sorry , not Found!!")
    }

    

    return searchFormDb.take(limit).skip(pageNumber).getMany()
  }

  @Query(() => [Driver])
  @UseMiddleware(isAuthMiddleware)
  async appSearchDrivers(@Arg("data") name: string): Promise<Array<typeof SearchDriverResult>> {

    if (!name) {
        throw new Error("Search mustn't be null")
    }
   
    const searchFormDb = await getConnection()
    .getRepository(Driver)
    .createQueryBuilder("l")
    .orWhere("l.phoneNumber ilike :phone ",{phone:`%${name}%`})
    .orWhere("l.first_name ilike :name ",{name:`%${name}%`})
    .orWhere("l.city ilike :city ",{city:`%${name}%`})
    
    


    if (!searchFormDb) {
        throw new Error("Sorry , not Found!!")
    }

    

    return searchFormDb.getMany()
  }

  
}