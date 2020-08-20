import { Resolver, FieldResolver, Root } from "type-graphql";
import { Agency } from '../../entity/Agency';
import { AgencyImage } from './sheared/agencyImages';

@Resolver(()=>Agency)
export class ImagesAgencyResolver{

    @FieldResolver(()=>AgencyImage)
   async images(@Root() agency:Agency):Promise<AgencyImage>{
        const urls = new AgencyImage()
        urls.profileImageUrl = agency.images.profile_img
        urls.nidForntUrl = agency.images.nid_front
        urls.nidBackUrl = agency.images.nid_back
        urls.lisenseForntUrl = agency.images.lisense_front
        urls.lisenseBackUrl = agency.images.lisense_back

        return urls
    }
}