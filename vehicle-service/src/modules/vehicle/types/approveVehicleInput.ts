import { InputType, Field } from "type-graphql";
import { Length} from "class-validator";
import { Status } from '../../types/statusEnumType';


@InputType()
export class ApproveVehicleInput {

    @Length(1,255)
    @Field()
    userId: string

    @Field(()=>Status)
    status: Status

}