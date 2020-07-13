// custom text component for different platform
import React from "react";
import { Text, StyleSheet } from "react-native";

// import styles from "./styles";

// destructure the children props so don't need to use props.children
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
