import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  abbreviation?: SortOrder;
  countryCode?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
