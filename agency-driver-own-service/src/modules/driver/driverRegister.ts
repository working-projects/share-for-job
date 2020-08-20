import { Resolver, Mutation, Arg } from "type-graphql";
import * as bcrypt from 'bcryptjs'
import { RegisterResponse } from '../types/registerResponse';
import { RegisterDriverInput } from './input-type/registerInput';
import { Driver } from '../../entity/Driver';


@Resolver()
export class DriverRegisterResolver {

    @Mutation(() => RegisterResponse)
    async registerDriver(@Arg("data") {
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
    }: RegisterDriverInput): Promise<RegisterResponse> {

        const hashedPassword = await bcrypt.hash(password, 12)

        const driver = await Driver.insert({
            first_name,
            last_name,
            phoneNumber,
            password: hashedPassword,
            city,
            present_address,
            permanent_address,
            images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl,lisense_front:lisenseForntUrl, lisense_back:lisenseBackUrl },
        })

        const res = new RegisterResponse()
        if (!driver) {
            res.success = false
            res.message = "does not saved"
            return res
        }

        res.success = true
        res.message = "Saved successfuly"
        
        return res

    }




}