import { createUnionType } from "type-graphql";
import { VehicleBrand } from '../../../entity/VehicleBrand';
import { VehicleCategory } from '../../../entity/VehicleCategory';
import { VehicleModel } from '../../../entity/VehicleModel';
import { VehicleQualityPrice } from '../../../entity/VehicleQuality';
import { Vehicle } from '../../../entity/Vehicle';

export const SearchResultUnion = createUnionType({
  name: "SearchResult", // the name of the GraphQL union
  types: () => [VehicleBrand,VehicleCategory,VehicleModel,VehicleQualityPrice, Vehicle] as const, // function that returns tuple of object types classes
});