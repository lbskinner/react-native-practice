import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  Button,
} from "react-native";
// the library below is part of expo package
import { MaterialCommunityIcons } from "@expo/vector-icons";

// can import AppText this way when an index.js files has been created in the AppText file
import AppText from "../components/AppText";
// import AppText from "../components/AppText/AppText";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppText>Sell What You Don't Need</AppText>
      </View>
      {/* <MaterialCommunityIcons name="email" size={100} color="dodgerblue" /> */}
      <View style={styles.loginButton}>
        <Button title="Login" color="#fff" />
      </View>
      <View style={styles.registerButton}>
        <Button title="Register" color="#fff" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
