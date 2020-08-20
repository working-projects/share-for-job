import { createUnionType } from "type-graphql";
import { Agency } from '../../../entity/Agency';
import { Driver } from '../../../entity/Driver';

export const SearchAgencyResult = createUnionType({
  name: "SearchAgencyResult", // the name of the GraphQL union
  types: () => [Agency] as const, // function that returns tuple of object types classes
});

export const SearchDriverResult = createUnionType({
  name: "SearchAgencyResult", // the name of the GraphQL union
  types: () => [Driver] as const, // function that returns tuple of object types classes
});