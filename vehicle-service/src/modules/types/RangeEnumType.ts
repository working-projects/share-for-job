import { registerEnumType } from 'type-graphql';

export enum RangeArea{
    INTERSIDECITY ='INTERCITY',
    OUTSIDECITY ='OUTSIDECITY',
    ALL = 'ALL'
}


registerEnumType(RangeArea, {
    name: "RangeArea", // this one is mandatory
  });