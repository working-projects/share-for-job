import { getConnection } from 'typeorm';
import {Messages}  from '../../Model/Message';

export async function resolveMessageReference(reference:Pick<Messages,"_id">):Promise<Messages> {
    const message = await getConnection().getRepository(Messages).findOne({where:{id:reference._id}})
    if (!message) {
        throw new Error("Message Reference id invalid ")
    }
    return message
}