import { Resolver, Mutation, Arg } from "type-graphql";
import * as bcrypt from 'bcryptjs'
import { RegisterResponse } from '../types/registerResponse';
import { Agency } from '../../entity/Agency';
import { RegisterOwnCarInput } from './types/owncarInput';
import { RegisterDriverInput } from '../driver/input-type/registerInput';
import { Driver } from '../../entity/Driver';


@Resolver()
export class RegisterOwnCarResolver {

    @Mutation(() => RegisterResponse)
    async registerOwnCar(@Arg("data") {
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
        nidBackUrl,
        lisenseForntUrl,
        lisenseBackUrl
    }: RegisterOwnCarInput): Promise<RegisterResponse> {

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
            images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front: lisenseForntUrl, lisense_back: lisenseBackUrl },
            isOwnACar:true,
            role:"OWNCAR"
        })

        const res = new RegisterResponse()
        if (!agency) {
            res.success = false
            res.message = "does not saved"
            return res
        }

        const isDriver = await this.insertDriverData({
            first_name,
            last_name,
            phoneNumber,
            password,
            city,
            present_address,
            permanent_address,
            profileImageUrl,
            nidForntUrl,
            nidBackUrl,
            lisenseForntUrl,
            lisenseBackUrl,
        })


        if (!isDriver) {
            res.success = false
            res.message = "does not saved"
            return res
        }

        res.success = true
        res.message = "Saved successfuly"

        return res

    }


    async insertDriverData({
        first_name,
        last_name,
        phoneNumber,
        password,
        city,
        present_address,
        permanent_address,
        profileImageUrl,
        nidForntUrl,
        nidBackUrl,
        lisenseForntUrl,
        lisenseBackUrl,
    }: RegisterDriverInput): Promise<boolean> {
        const agency = await Agency.findOne({ where: { phoneNumber } })


        if (!agency) {
            return false
        }


        const hashedPassword = await bcrypt.hash(password, 12)

        const driver = await Driver.insert({
            first_name,
            last_name,
            phoneNumber,
            password: hashedPassword,
            city,
            present_address,
            permanent_address,
            images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl, lisense_front: lisenseForntUrl, lisense_back: lisenseBackUrl },
            agencyId: agency.id
        })

        if (!driver) {
            return false
        }


        return true

    }

}