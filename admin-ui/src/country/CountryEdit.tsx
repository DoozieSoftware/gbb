import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CountryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="abbreviation" source="abbreviation" />
        <TextInput label="country_code" source="countryCode" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
