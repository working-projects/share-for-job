import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Claim } from "../../../entity/Claim";
import { ClaimsInput } from "./input";
import { createWriteStream } from "fs";
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../types/Upload";

@Resolver(Claim)
export class ClaimsResolvers {
  @Mutation(() => Claim)
  async claimToDriver(
    @Arg("file_url", () => GraphQLUpload)
    { createReadStream, filename }: Upload,
    @Arg("data") data: ClaimsInput
  ): Promise<Claim | any> {
    const files = new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `../../../assets/files${filename}`))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false))
    );
    const claims = await Claim.create({
      ...data,
      file_url: filename,
    }).save();
    if (!claims) throw new Error("Claim not sended please try again");
    return claims;
  }
  @Mutation(() => Claim)
  async claimToRider(
    @Arg("file_url", () => GraphQLUpload)
    { createReadStream, filename }: Upload,
    @Arg("data") data: ClaimsInput
  ): Promise<Claim | any> {
    const files = new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `../../../assets/files${filename}`))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false))
    );
    const claims = await Claim.create({
      ...data,
      file_url: filename,
    }).save();
    if (!claims) throw new Error("Claim not sended please try again");
    return claims;
  }

  @Mutation(() => Claim)
  async claimToAgency(
    @Arg("file_url", () => GraphQLUpload)
    { createReadStream, filename }: Upload,
    @Arg("data") data: ClaimsInput
  ): Promise<Claim | any> {
    const files = new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `../../../assets/files${filename}`))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false))
    );
    const claims = await Claim.create({
      ...data,
      file_url: filename,
    }).save();
    if (!claims) throw new Error("Claim not sended please try again");
    return claims;
  }

  @Mutation(() => Claim)
  async claimToGetIn(
    @Arg("file_url", () => GraphQLUpload)
    { createReadStream, filename }: Upload,
    @Arg("data") data: ClaimsInput
  ): Promise<Claim | any> {
    const files = new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `../../../assets/files${filename}`))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false))
    );
    const claims = await Claim.create({
      ...data,
      file_url: filename,
    }).save();
    if (!claims) throw new Error("Claim not sended please try again");
    return claims;
  }

  @Query(() => Claim)
  async showClaims(@Arg("id") id: string): Promise<Claim | any> {
    const claims = await Claim.findOneOrFail(id);
    if (!claims) throw new Error("Claim not found");
    return claims;
  }

  @Query(() => Claim)
  async deleteClaim(@Arg("id") id: string): Promise<Claim | any> {
    const claims = await Claim.delete(id);
    if (!claims) throw new Error("Claim not found");
    return claims;
  }
}
