import { Resolver, Query, Arg, Mutation, UseMiddleware } from "type-graphql";
import { Rider } from "../../../entity/Rider";
import { RiderRegisterInput } from "./Input";
import { accessToken, refreshToken } from "../../../config/config";
import Token from "./Input/Token";
import PhoneInputs from "./Input/PhoneInputs";
import { getConnection } from "typeorm";
import jwtMiddleWare from "../../../middleware/jwtMiddleware";
import { RiderUpdateInput } from "./Input/RiderUpdateInput";
import { Slider } from "../../../entity/Slider";
import { SliderInput } from "./Input/SlideeInput";
import { runInThisContext } from "vm";


@Resolver(Rider)
export default class RatingResolver {
  @Query(() => Rider)
  @UseMiddleware(jwtMiddleWare)
  async rider(@Arg("id") id: number): Promise<Rider | any> {
    const singleRider = await Rider.findOne(id);
    if (!singleRider) throw new Error("Sorry Rider not found");
    return singleRider;
  }

  
  @Query(() => [Rider])
  @UseMiddleware(jwtMiddleWare)
  async riders(): Promise<Rider[] | any> {
    const allRiders = await Rider.find();
    if (!allRiders) throw new Error("Sorry Riders not found");
    return allRiders;
  }

  @Query(() => [Rider])
  @UseMiddleware(jwtMiddleWare)
  async search(
    @Arg("query") query: string,
    @Arg("limit") limit: number,
    @Arg("pageNumber") pageNumber: number
  ): Promise<Rider[] | any> {
    const rider = await getConnection()
      .getRepository(Rider)
      .createQueryBuilder("l")
      .orWhere("l.firstName ilike :firstName ", { firstName: `%${query}%` })
      .orWhere("l.lastName ilike :lastName ", { lastName: `%${query}%` })
      .orWhere("l.email ilike :email", { email: `%${query}%` })
      .orWhere("l.phone ilike :phone", { phone: `%${query}%` })
      .take(limit)
      .skip(pageNumber)
      .getMany();
    if (!rider) throw new Error("No item found");
    return rider;
  }

  @Mutation(() => Token)
  async riderLogin(@Arg("data") { phone }: PhoneInputs): Promise<Token | any> {
    try {
      const token = {
        ACCESS_TOKEN: "",
        REFRESH_TOKEN: "",
      };
      const rider = await Rider.findOneOrFail({ where: {phone:phone } });
      if (!rider) throw new Error("Login Failed");
      token.ACCESS_TOKEN = await accessToken(rider);
      token.REFRESH_TOKEN = await refreshToken(rider.id);
      return token;
    } catch (error) {
      return error;
    }
  }

  @Mutation(() => Token)
  async loginORRegister(
    @Arg("data")
    {
      firstName,
      lastName,
      phone,
      dob,
      email,
      isActive,
      profileImg,
      nidFront,
      nidBack,
    }: RiderRegisterInput
  ): Promise<Token | any> {
    const token = {
      ACCESS_TOKEN: "",
      REFRESH_TOKEN: "",
    };
    const login:any = await Rider.findOne({ where: { phone } });
    if (login) {
      token.ACCESS_TOKEN = await accessToken(login);
      token.REFRESH_TOKEN = await refreshToken(login.id);
      return token;
    } else {
      const rider: any = await Rider.create({
        firstName,
        lastName,
        phone,
        email,
        dob,
        images: {
          profile_img: profileImg,
          nid_front: nidFront,
          nid_back: nidBack,
        },
        isActive,
      }).save();
      if (!rider) throw new Error("Rider Registration Failed");
      console.log("register", rider.id);
      token.ACCESS_TOKEN = await accessToken(rider);
      token.REFRESH_TOKEN = await refreshToken(rider.id);
      return token;
    }
  }

  @UseMiddleware(jwtMiddleWare)
  @Mutation(() => Rider)
  async updateRider(@Arg("data") data: RiderUpdateInput): Promise<Rider | any> {
    const rider = await Rider.findOne({ where: { id: data.id } });
    if (!rider) throw new Error("Rider not Found");
    rider.firstName = data.firstName;
    rider.lastName = data.lastName;
    rider.phone = data.phone;
    (rider.email = data.email), (rider.dob = data.dob);
    rider.images = {
      profile_img: data.profileImg,
      nid_front: data.nidFront,
      nid_back: data.nidBack,
    };
    const updated = await rider.save();
    if (updated) return rider;
  }

  @Query(()=>[Slider])
  async sliders():Promise<Slider[]| any>{
    const slider:any = Slider.find()
    if(!slider) throw new Error("No data found")
    else return slider;
  }
  @Query(()=>Slider)
  async slider(@Arg('id') id:number):Promise<Slider| any>{
    const slider:any = Slider.findOneOrFail(id)
    if(!slider) throw new Error("No data found")
    else return slider;
  }

  @Mutation(()=>Slider)
  async uploadSlider(@Arg('data') data:SliderInput):Promise<Slider| any>{
    const slider:any = Slider.create(data).save()
    if(!slider) throw new Error("Sorry your Slider could not uploaded")
    else return slider;
  }
  
}
