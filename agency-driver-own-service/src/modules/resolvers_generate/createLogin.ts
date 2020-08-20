import { ClassType, Resolver, Mutation, UseMiddleware, Arg } from 'type-graphql';
import { Middleware } from "type-graphql/dist/interfaces/Middleware";
import { Driver } from '../../entity/Driver';
import { LoginDriverResponseType } from './types/loginDriverResponse';
import { createAccessToken, createRefreshToken } from '../agency/sheared/authTokens';
import { ADToken } from '../types/tokenType';
import * as bcrypt from 'bcryptjs'
import { LoginInput } from './types/loginInput';
import { Agency } from '../../entity/Agency';
import { LoginResponse } from '../agency/sheared/loginResponse';


function CreateResolver<T extends ClassType,X extends ClassType<LoginInput>>(
    suffix:string,
    inputType:X,
    entity:any,
    returnType:T,
    middleware?:Middleware<any>[]
){

    @Resolver()
    class BaseResolver{
        @Mutation(()=> returnType,{name:`login${suffix}`})
        @UseMiddleware(...(middleware || []))
        async create(@Arg("data",()=> inputType){phoneNumber, password}:LoginInput){
            
            const user = await entity.findOne({ where: { phoneNumber } })

            if (!user) {
                throw new Error("User not Found")
            }
    
            const validPassword = await bcrypt.compare(password, user.password)
    
            if (!validPassword) {
                throw new Error("The password doesn't match, try again!!")
            }
    
            const token = new ADToken()
            token.tokenType = 'Bearer'
            token.accessToken = await createAccessToken(user)
            token.refreshToken = await createRefreshToken(user)
    
            return{
                success:true,
                message:"Login sucessfuly",
                data:user,
                token:token
            }
        }
    }

    return BaseResolver
}

export const LoginDriverResolver = CreateResolver("Driver",LoginInput,Driver,LoginDriverResponseType,[])
export const LoginAgencyResolver = CreateResolver("Agency",LoginInput,Agency,LoginResponse,[])