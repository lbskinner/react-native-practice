import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
export default function App() {
  return (
    // <ListingDetailsScreen />

    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
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
