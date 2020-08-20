import { Resolver, Mutation, Arg } from "type-graphql";
import * as bcrypt from 'bcryptjs'
import { RegisterAgencyInput } from './input-types/agencyInput';
import { RegisterResponse } from '../types/registerResponse';
import { Agency } from '../../entity/Agency';


@Resolver()
export class RegisterResolver {

    @Mutation(() => RegisterResponse)
    async registerAgency(@Arg("data") {
        company_name,
        company_address,
        first_name,
        last_name,
        phoneNumber,
        email,
        password,
        city,
        present_address,
        permanent_address,
        latitude,
        longitude,
        profileImageUrl,
        nidForntUrl,
        nidBackUrl
    }: RegisterAgencyInput): Promise<RegisterResponse> {

        const hashedPassword = await bcrypt.hash(password, 12)



        
        const agency = await Agency.insert({
            company_name,
            company_address,
            first_name,
            last_name,
            phoneNumber,
            email,
            password: hashedPassword,
            city,
            present_address,
            permanent_address,
            latitude,
            longitude,
            images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front:"", lisense_back:"" },
        })

        const res = new RegisterResponse()
        if (!agency) {
            res.success = false
            res.message = "does not saved"
            return res
        }

        res.success = true
        res.message = "Saved successfuly"
        
        return res

    }




}