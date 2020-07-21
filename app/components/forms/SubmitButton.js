import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title }) {
  {
    /* handleSubmit is a function provided by formik */
  }
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
