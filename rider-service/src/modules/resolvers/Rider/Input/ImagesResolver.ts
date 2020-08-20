// import { Resolver, FieldResolver, Root } from "type-graphql";
// import { Rider } from '../../../../entity/Rider';
// import {RiderImage} from "./RiderImages";


// @Resolver(()=>Rider)
// export class ImagesRiderResolver{

// @FieldResolver(()=>RiderImage)
//    async images(@Root() rider:Rider):Promise<RiderImage>{
//         const urls = new RiderImage()
//         urls.profileImg = rider.images.profile_img
//         urls.nidFront = rider.images.nid_front
//         urls.nidBack = rider.images.nid_back
//         return urls
//     }
// }