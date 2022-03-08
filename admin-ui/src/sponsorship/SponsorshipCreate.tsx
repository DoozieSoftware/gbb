import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SponsorshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput
          step={1}
          label="number_of_meeting"
          source="numberOfMeeting"
        />
      </SimpleForm>
    </Create>
  );
};
