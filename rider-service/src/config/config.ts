import { sign } from 'jsonwebtoken';
import {config} from 'dotenv';

config({path:'.env'})


const accessToken = async(data: any)=>{
    const {SECRET_KEY,EXPIRE_IN_ACCESS_TOKEN} = process.env
    const access = sign(
        {payload:{
            id:data
        }},
         SECRET_KEY!,
        {expiresIn:EXPIRE_IN_ACCESS_TOKEN}
        ) 
        return `Bearer ${access}`;
}

const refreshToken =async(id: any)=>{
    console.log(id)
    const {SECRET_KEY,EXPIRE_IN_REFRESH_TOKEN} = process.env
    const refresh = sign(
        {payload:{
            id
        }},
         SECRET_KEY!,
        {expiresIn:EXPIRE_IN_REFRESH_TOKEN}
        ) 
        return `Bearer ${refresh}`;
}

export{
    accessToken,
    refreshToken
}






