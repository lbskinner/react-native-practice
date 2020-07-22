import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  // function in the useEffect hook gets executed every time the component gets rendered
  // useEffect has an optional second perimeter - an array of dependencies
  // anytime any of these variables (the variables passed in the array) changes, the function will get re-executed
  // when pass an empty array, the function only gets executed once since there are no dependencies
  // useEffect can not accept a function that returns a promise
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // permissions API can pass multiple permission types
    // this method also returns a promise
    // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    // method above is the identical to the method below (requestCameraRollPermissionsAsync())
    // the request method internally uses permissions API
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    // if no image, call select image function to select an image
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image: ", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
