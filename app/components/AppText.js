// custom text component for different platform
import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

// destructure the children props so don't need to use props.children
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
