import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";

function SubmitButton({ title }) {
  {
    /* handleSubmit is a function provided by formik */
  }
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
