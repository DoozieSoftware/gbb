import { Sponsorship as TSponsorship } from "../api/sponsorship/Sponsorship";

export const SPONSORSHIP_TITLE_FIELD = "name";

export const SponsorshipTitle = (record: TSponsorship): string => {
  return record.name || record.id;
};
