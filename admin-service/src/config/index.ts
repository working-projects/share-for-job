import { sign,Algorithm } from 'jsonwebtoken';
import {config} from 'dotenv';

config({path:'.env'})

const {
    SECRET_KEY,
    EXPIRE_IN_ACCESS_TOKEN,
    EXPIRE_IN_REFRESH_TOKEN,
    ALGORITHM,
    ISSUER,
    AUDIENCE
} = process.env

const accessToken =(id: any)=>{
    const access = sign(
        {user:id},
         SECRET_KEY as string,
        {
            expiresIn:EXPIRE_IN_ACCESS_TOKEN,
            // algorithm:ALGORITHM as Algorithm,
            // issuer:ISSUER,
            // audience:AUDIENCE,
            
        }
        ) 
        return `Bearer ${access}`;
}

const refreshToken =(id: any)=>{
   
    const refresh = sign(
        {user:id},
        SECRET_KEY as string,
        {
            expiresIn:EXPIRE_IN_REFRESH_TOKEN,
            // algorithm:ALGORITHM as Algorithm,
            // issuer:ISSUER,
            // audience:AUDIENCE,
        }
        ) 
        return `Bearer ${refresh}`;
}

export{
    accessToken,
    refreshToken
}