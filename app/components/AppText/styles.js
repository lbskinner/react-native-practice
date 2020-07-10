import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    // select() is a method on Platform object
    // this method takes in object, optional key value pairs

    //   ...Platform.select({
    //     ios: {
    //       fontSize: 20,
    //       fontFamily: "Avenir",
    //     },
    //     android: {
    //       fontSize: 18,
    //       fontFamily: "Roboto",
    //     },
    //   }),
  },
});

export default styles;
