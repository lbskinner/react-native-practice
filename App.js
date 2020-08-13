import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { AppLoading } from "expo";

import Screen from "./app/components/Screen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AccountScreen from "./app/screens/AccountScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();

    if (!token) return;
    // jewDecode(token) returns an object
    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      // startAsync is called with the app is loaded
      // onFinish is an event get raised when the execution of the function is finished
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {/* render StackNavigator component instead of rendering the specific screens */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
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
