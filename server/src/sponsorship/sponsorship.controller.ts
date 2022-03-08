import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SponsorshipService } from "./sponsorship.service";
import { SponsorshipControllerBase } from "./base/sponsorship.controller.base";

@swagger.ApiTags("sponsorships")
@common.Controller("sponsorships")
export class SponsorshipController extends SponsorshipControllerBase {
  constructor(
    protected readonly service: SponsorshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
