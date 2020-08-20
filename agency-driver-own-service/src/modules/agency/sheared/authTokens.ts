import { sign } from 'jsonwebtoken';



export const createAccessToken = (user:any) =>{
    return sign(
        { userId: user.id, role:user.role},
        process.env.SECRETACCESS!,
        {
            algorithm: "HS256",
            expiresIn: '7d'
        }
    )
}

export const createRefreshToken = (user:any) =>{
    return sign(
        { userId: user.id, tokenVersion:user.tokenVersion },
        process.env.SECRETREFRESH!,
        {
            algorithm: "HS256",
            expiresIn: '30d'
        }
    )
}