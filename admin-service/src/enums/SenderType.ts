import { registerEnumType } from "type-graphql";

enum SENDER_TYPE {
  RIDER="RIDER",
  DRIVER="DRIVER",
  AGENCY="AGENCY",
  GET_IN="GET_IN",
  }


registerEnumType(SENDER_TYPE, {
  name: "SENDER_TYPE", 
});




  export {SENDER_TYPE};