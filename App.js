import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { StyleSheet, Button, Image, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const Link = () => {
  // navigate method only available to the stack screens
  // child component needs to use hook to access the navigation method
  const navigation = useNavigation();

  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
    {/* <Button
      title="View Tweet"
      // the navigate method makes sure there is a single route/screen/instance
      // push method pushes a new route onto the stack, creates another instance
      onPress={() => navigation.navigate("TweetDetails")}
    /> */}
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

// createStackNavigator gives an object
const Stack = createStackNavigator();
const StackNavigator = () => (
  // the StackNavigator components knows how to navigate between the different screens
  <Stack.Navigator initialRouteName="Tweets">
    {/* first screen is the default screen showing or use initialRouteName */}
    {/* name is used to define the routes and shows as the title of the bar  */}
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      {/* render StackNavigator component instead of rendering the specific screens */}
      <StackNavigator />
    </NavigationContainer>
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
