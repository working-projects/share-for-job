import { registerEnumType } from "type-graphql";

export enum ParticipantType{
  RIDER="RIDER",
  DRIVER="DRIVER",
  AGENCY='AGENCY',
}


registerEnumType(ParticipantType, {
    name: "ParticipantType", // this one is mandatory
  });

