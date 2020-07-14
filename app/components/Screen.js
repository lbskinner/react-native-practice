import React from "react";
import { SafeAreaView, StyleSheet, ImagePropTypes } from "react-native";
// constants provides information on the platform
import Constants from "expo-constants";

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    // can also install expo constants and access the statusBarHeight (android-24, IOS-44)
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
