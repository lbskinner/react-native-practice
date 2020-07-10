// custom text component for different platform
import React from "react";
import { Text } from "react-native";

import styles from "./styles";

// destructure the children props so don't need to use props.children
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default AppText;
