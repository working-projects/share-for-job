import { Resolver, Mutation, UseMiddleware, Arg } from 'type-graphql';

import { Agency } from '../../entity/Agency';
import { UpdateAgencyInput } from './input-types/agencyUpdateInput';
import { Status } from '../types/statusEnumType';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';

@Resolver()
export class UpdateAgencyResolver {

    @Mutation(() => Agency)
    @UseMiddleware(isAuthMiddleware)
    async updateAgency(@Arg("id") id: string, @Arg("data") {
        company_name,
        company_address,
        first_name,
        last_name,
        phoneNumber,
        email,
        city,
        present_address,
        permanent_address,
        latitude,
        longitude,
        profileImageUrl,
        nidForntUrl,
        nidBackUrl
    }: UpdateAgencyInput) {
        const agency = await Agency.findOne({ where: { id } });
        if (!agency) throw new Error("Agency not found!");
        Object.assign(agency,{
            company_name,
            company_address,
            first_name,
            last_name,
            phoneNumber,
            email,
            city,
            present_address,
            permanent_address,
            latitude,
            longitude,
            images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front:"", lisense_back:"" },
        } );
        await agency.save();
        return agency;
    }

    @Mutation(() => Agency)
    @UseMiddleware(isAuthMiddleware)
    async app_updateAgency(@Arg("id") id: string, @Arg("data"){
        company_name,
        company_address,
        first_name,
        last_name,
        phoneNumber,
        email,
        city,
        present_address,
        permanent_address,
        latitude,
        longitude,
        profileImageUrl,
        nidForntUrl,
        nidBackUrl
    } : UpdateAgencyInput) {

        if (!id) {
            throw new Error("user id mustn't be null")
        }

        const user = await Agency.findOne({ where: { id: id } })
        if (!user) {
            throw new Error(`Agency data not found`)
        }

        if (user.status === Status.PENDING) {
            throw new Error(`Not yet , your account did not allow`)
        } else if (user.status === Status.SUSPENDED) {
            throw new Error(`Your Account Suspended, Please Contact our helpline`)
        } else if (user.status === Status.INACTIVE) {
            throw new Error(`Your Account Inactive`)
        } else {
            const agency = await Agency.findOne({ where: { id } });
            if (!agency) throw new Error("Agency not found!");
            Object.assign(agency, {
                company_name,
                company_address,
                first_name,
                last_name,
                phoneNumber,
                email,
                city,
                present_address,
                permanent_address,
                latitude,
                longitude,
                images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front:"", lisense_back:"" },
            });
            await agency.save();
            return agency;
        }


    }


}