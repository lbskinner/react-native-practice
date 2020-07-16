import React from "react";
import { SafeAreaView, StyleSheet, ImagePropTypes, View } from "react-native";
// constants provides information on the platform
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    // SafeAreaView does not support horizontal padding currently
    // added a View inside the SafeAreaView as a work around
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // can also install expo constants and access the statusBarHeight (android-24, IOS-44)
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
