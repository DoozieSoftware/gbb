import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CountryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="abbreviation" source="abbreviation" />
        <TextInput label="country_code" source="countryCode" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
