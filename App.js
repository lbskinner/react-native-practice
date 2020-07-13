import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
      {/* <AppButton title="Login" onPress={() => console.log("Button Clicked")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
