// custom text component for different platform
import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

// destructure the children props so don't need to use props.children
function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    // select() is a method on Platform object
    // this method takes in object, optional key value pairs

    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
