import { registerEnumType } from "type-graphql";

export enum Status{
    ACTIVE ='ACTIVE',
    INACTIVE ='INACTIVE',
    PENDING='PENDING',
    SUSPENDED ='SUSPENDED'
}


registerEnumType(Status, {
    name: "Status", // this one is mandatory
  });