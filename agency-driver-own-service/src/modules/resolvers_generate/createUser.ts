import { ClassType, Resolver, Mutation, UseMiddleware, Arg } from "type-graphql";
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { CreateResponse } from './createResponse';
import { Driver } from '../../entity/Driver';
import { RegisterDriverInput } from '../driver/input-type/registerInput';

function CreateResolver<X extends ClassType>(
    suffix:string,
    inputType:X,
    entity:any,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Mutation(()=> CreateResponse,{name:`create${suffix}`})
        @UseMiddleware(...(middleware || []))
        async create(@Arg("data",()=> inputType)data:any):Promise<CreateResponse>{
            const user = await entity.create(data).save()
            if (!user) {
                throw new Error(`${suffix} does not save`)
            }

            return{
                success:true,
                message:"Save Successfuly"
            }

        }
    }

    return BaseResolver
}

export const RegisterDriver = CreateResolver("Driver",RegisterDriverInput,Driver,[])