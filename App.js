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
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text Clicked");
  };

  const handleTouchImage = () => {
    console.log("Touched Image");
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
