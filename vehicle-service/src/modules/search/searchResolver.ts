import { Resolver, Query, Arg } from 'type-graphql';
import { SearchResultUnion } from './types/searchResult';
import { VehicleBrand } from '../../entity/VehicleBrand';
import { Like, getConnection } from 'typeorm';
import { SearchAndPaginated } from '../resolver_generate/types/searchAndPaginated';
import { VehicleCategory } from '../../entity/VehicleCategory';
import { VehicleModel } from '../../entity/VehicleModel';
import { VehicleQualityPrice } from '../../entity/VehicleQuality';
import { Vehicle } from '../../entity/Vehicle';
@Resolver()
export class SearchResolver {
  @Query(returns => [SearchResultUnion])
  async searchVehicleBMCQ(@Arg("data") { name, pageNumber, limit }: SearchAndPaginated): Promise<Array<typeof SearchResultUnion>> {
    const barnds = await VehicleBrand.find({ where: { name: Like(`%${name}%`) }, skip: pageNumber, take: limit })
    const categories = await VehicleCategory.find({ where: { name: Like(`%${name}%`) }, skip: pageNumber, take: limit })
    const models = await VehicleModel.find({ where: { name: Like(`%${name}%`) }, skip: pageNumber, take: limit })
    const qualities = await VehicleQualityPrice.find({ where: { name: Like(`%${name}%`) }, skip: pageNumber, take: limit })
    const vehicles = await getConnection()
      .getRepository(Vehicle)
      .createQueryBuilder("l")
      .orWhere("l.name ilike :name ", { name: `%${name}%` })
      .orWhere("l.color ilike :name ", { name: `%${name}%` })
      .orWhere("l.carNumber ilike :name ", { name: `%${name}%` })
      .orWhere("l.mfg_year ilike :name ", { name: `%${name}%` })
      .take(limit)
      .skip(pageNumber).getMany()
    //await Vehicle.find({
    //   where: {
    //     name: Like(`%${name}%`)
    //   }, skip: pageNumber, take: limit
    // })


    return [...barnds, ...categories, ...models, ...qualities, ...vehicles];
  }
}