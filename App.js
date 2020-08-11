import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { StyleSheet, Button, Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AccountScreen from "./app/screens/AccountScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

export default function App() {
  // fetch() only fetch connection info once
  // NetInfo.fetch().then((netInfo) => console.log(netInfo));
  // typically call the NetInfo.addEventListener in componentDidMount in class component
  // const unsubscribe = NetInfo.addEventListener((netInfo) => console.log(netInfo));

  // usually call unsubscribe in componentWillUnmount in class component
  // unsubscribe();

  // use hooks in functional component
  const netInfo = useNetInfo();

  return (
    // one common approach below
    // netInfo.isInternetReachable ? <View></View> : <View></View>
    // another common approach
    <Button disabled={!netInfo.isInternetReachable} title="Button" />
    // <NavigationContainer theme={navigationTheme}>
    //   {/* render StackNavigator component instead of rendering the specific screens */}
    //   {/* <AuthNavigator /> */}
    //   <AppNavigator />
    // </NavigationContainer>
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
