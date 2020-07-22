import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { StyleSheet, Button, Image } from "react-native";

import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    // permissions API can pass multiple permission types
    // this method also returns a promise
    // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    // method above is the identical to the method below (requestCameraRollPermissionsAsync())
    // the request method internally uses permissions API
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  // function in the useEffect hook gets executed every time the component gets rendered
  // useEffect has an optional second perimeter - an array of dependencies
  // anytime any of these variables (the variables passed in the array) changes, the function will get re-executed
  // when pass an empty array, the function only gets executed once since there are no dependencies
  // useEffect can not accept a function that returns a promise
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image: ", error);
    }
  };

  return (
    <Screen>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
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
