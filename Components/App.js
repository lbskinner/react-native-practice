import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome></Welcome>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
