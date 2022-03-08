import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SponsorshipResolverBase } from "./base/sponsorship.resolver.base";
import { Sponsorship } from "./base/Sponsorship";
import { SponsorshipService } from "./sponsorship.service";

@graphql.Resolver(() => Sponsorship)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SponsorshipResolver extends SponsorshipResolverBase {
  constructor(
    protected readonly service: SponsorshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
