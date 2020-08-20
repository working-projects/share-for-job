import { Resolver, Mutation, UseMiddleware, Arg} from 'type-graphql';

import { Status } from '../types/statusEnumType';
import { isAuthMiddleware } from '../middleware/isAuthMiddleware';
import { DriverUpdateInput } from './input-type/updateDriverInput';
import { Driver } from '../../entity/Driver';

@Resolver()
export class UpdateAgencyResolver {

    @Mutation(() => Driver)
    @UseMiddleware(isAuthMiddleware)
    async updateDriver(@Arg("id") id: string, @Arg("data") {
        first_name,
        last_name,
        phoneNumber,
        city,
        present_address,
        permanent_address,
        profileImageUrl,
        nidForntUrl,
        nidBackUrl,
        lisenseForntUrl,
        lisenseBackUrl,
        agencyId
    }: DriverUpdateInput) {
        const driver = await Driver.findOne({ where: { id } });
            if ( !driver) throw new Error("driver not found!");
            Object.assign(driver, {
                first_name,
                last_name,
                phoneNumber,
                city,
                present_address,
                permanent_address,
                images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl,lisense_front:lisenseForntUrl, lisense_back:lisenseBackUrl },
                agencyId:agencyId
            });
            await driver.save();
            return driver;
    }

    @Mutation(() => Driver)
    @UseMiddleware(isAuthMiddleware)
    async app_updateDriver(@Arg("id") id: string, @Arg("data") {
        first_name,
        last_name,
        phoneNumber,
        city,
        present_address,
        permanent_address,
        profileImageUrl,
        nidForntUrl,
        nidBackUrl,
        lisenseForntUrl,
        lisenseBackUrl,
        agencyId
    }: DriverUpdateInput) {

        if (!id) {
            throw new Error("user id mustn't be null")
        }

        const user = await Driver.findOne({ where: { id: id } })
        if (!user) {
            throw new Error(`Driver data not found`)
        }

        if (user.status === Status.PENDING) {
            throw new Error(`Not yet , your account did not allow`)
        } else if (user.status === Status.SUSPENDED) {
            throw new Error(`Your Account Suspended, Please Contact our helpline`)
        } else if (user.status === Status.INACTIVE) {
            throw new Error(`Your Account Inactive`)
        } else {
            const driver = await Driver.findOne({ where: { id } });
            if ( !driver) throw new Error("driver not found!");
            Object.assign(driver, {
                first_name,
                last_name,
                phoneNumber,
                city,
                present_address,
                permanent_address,
                images: { profile_img: profileImageUrl, nid_front: nidForntUrl, nid_back: nidBackUrl,lisense_front:lisenseForntUrl, lisense_back:lisenseBackUrl },
                agencyId:agencyId
            });
            await driver.save();
            return driver;
        }


    }


}