import { Resolver, FieldResolver, Root } from "type-graphql";
import { DriverImage } from './sheared/driverImage';
import { Driver } from '../../entity/Driver';


@Resolver(()=>Driver)
export class ImagesDriverResolver{

    @FieldResolver(()=>DriverImage)
   async images(@Root() driver:Driver):Promise<DriverImage>{
        const urls = new DriverImage()
        urls.profileImageUrl = driver.images.profile_img
        urls.nidForntUrl = driver.images.nid_front
        urls.nidBackUrl = driver.images.nid_back
        urls.lisenseForntUrl = driver.images.lisense_front
        urls.lisenseBackUrl = driver.images.lisense_back

        return urls
    }
}