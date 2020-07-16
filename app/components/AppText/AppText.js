// custom text component for different platform
import React from "react";
import { Text } from "react-native";

import defaultStyles from "../../config/styles";
// import styles from "./styles";

// destructure the children props so don't need to use props.children
function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
