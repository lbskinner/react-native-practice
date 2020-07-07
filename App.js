import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text Clicked");
  };

  return (
    // view is a container component for react native
    // SafeAreaView adds padding to the top ex. avoid the top black notch, etc.
    <SafeAreaView style={styles.container}>
      {/* always wrap text in Text component */}
      <Text numberOfLines={2} onPress={handlePress}>
        Hello React Native - A really really long text. Now I wanna make this
        line even longer and see what happens!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
