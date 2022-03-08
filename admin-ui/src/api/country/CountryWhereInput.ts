import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CountryWhereInput = {
  abbreviation?: StringNullableFilter;
  countryCode?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
