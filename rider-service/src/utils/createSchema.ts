
import { buildFederatedSchema } from './buildFederatedSchema';
import {resolveRatingReference} from '../modules/reference/RatingReference';
import { Rider } from '../entity/Rider';
import { RiderImage } from '../modules/resolvers/Rider/Input/RiderImages';

export const FederatedSchema = buildFederatedSchema(
    {
        resolvers: [__dirname + "/../modules/**/*.ts"],
    },
    {
        Rating: {
            __resolveReference: resolveRatingReference,
        },
        Rider:{
            async images(rider:Rider):Promise<RiderImage>{
                const urls = new RiderImage()
                urls.profileImg = rider.images.profile_img
                urls.nidFront = rider.images.nid_front
                urls.nidBack = rider.images.nid_back
                return urls
            } 
        }
    }

)
