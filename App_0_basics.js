import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
// preferred way to get dimensions of screen if support multiple orientations of device
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  // get the dimensions of the device, however, it doesn't respond to orientation changes
  // console.log(Dimensions.get("screen"));
  // get device dimensions for orientation changes
  // console.log(useDimensions());
  // detects the orientation of device
  // console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  const handlePress = () => {
    console.log("Text Clicked");
  };

  const handleTouchImage = () => {
    console.log("Touched Image");
  };

  const handelPressButton = () => {
    // Alert.alert("My Title", "My Message", [
    //   { text: "Yes", onPress: () => console.log("Yes") },
    //   { text: "No", onPress: () => console.log("No") },
    // ]);
    Alert.prompt("My Title", "My Message", (text) => console.log(text));
  };

  return (
    // view is a container component for react native
    // SafeAreaView adds padding to the top ex. avoid the top black notch, etc. only works for IOS currently
    // <SafeAreaView style={containerStyle}>
    // <SafeAreaView style={{ backgroundColor: "orange" }}>
    // <SafeAreaView style={styles.container}></SafeAreaView>
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: "blue",
          // takes exactly half of the screen
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
      {/* always wrap text in Text component */}
      <Text numberOfLines={2} onPress={handlePress}>
        Hello React Native - A really really long text. Now I wanna make this
        line even longer and see what happens!
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      {/* url images - need to specify size, don't need to specify size for local images  */}
      {/* TouchableNativeFeedback is for android only and to be used with View */}
      <TouchableHighlight onPress={handleTouchImage}>
        <Image
          blurRadius={10}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Button title="Click Me" onPress={handelPressButton} color="orange" />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1 means the component takes the entire screen, 0.5 means takes half of the screen
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // currentHeight is an android only property currently, it shows the height of status bar
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
