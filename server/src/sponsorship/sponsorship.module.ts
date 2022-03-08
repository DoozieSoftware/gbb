import { Module } from "@nestjs/common";
import { SponsorshipModuleBase } from "./base/sponsorship.module.base";
import { SponsorshipService } from "./sponsorship.service";
import { SponsorshipController } from "./sponsorship.controller";
import { SponsorshipResolver } from "./sponsorship.resolver";

@Module({
  imports: [SponsorshipModuleBase],
  controllers: [SponsorshipController],
  providers: [SponsorshipService, SponsorshipResolver],
  exports: [SponsorshipService],
})
export class SponsorshipModule {}
