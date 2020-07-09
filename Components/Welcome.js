import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.image}
      >
        <View
          style={{
            backgroundColor: "red",
            width: "100%",
            height: 50,
            alignSelf: "flex-end",
          }}
        />
        <View
          style={{
            backgroundColor: "green",
            width: "100%",
            height: 50,
            alignSelf: "flex-end",
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
