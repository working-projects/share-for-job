import { registerEnumType } from "type-graphql";
enum CATEGORY{
    RIDER="RIDER",
    DRIVER="DRIVER",
    AGENCY="AGENCY",
    GET_IN="GET_IN"
}


registerEnumType(CATEGORY, {
    name: "CATEGORY", 
  });


export {
    CATEGORY
}