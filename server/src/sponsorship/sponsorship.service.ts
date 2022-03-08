import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SponsorshipServiceBase } from "./base/sponsorship.service.base";

@Injectable()
export class SponsorshipService extends SponsorshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
