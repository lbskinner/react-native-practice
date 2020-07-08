import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", // determines the alignment of the secondary axis within each line
        // aligns all items (entire content) as a whole, only works when used together with wrap or no effect
        // alignContent: "center",
        // flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          // flexBasis sets the size of the item to the primary axis (horizontal in this case)
          // set it to 100 is equivalent of setting the width to 100
          // however, if primary axis is vertical axis, it would be equivalent of setting the height to 100
          // can map the width of height
          // flexBasis: 100,
          // flexGrow: 1, // same as use the flex property, however, need to manually reload the simulator to see result
          width: 400,
          flexShrink: 1, // shrinks the item to display all items, same result if set flex to -1
          height: 100,
          // used for items inside the containers to align the items inside the container
          // alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
      {/* <View
        style={{
          backgroundColor: "grey",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "greenyellow",
          width: 100,
          height: 100,
        }}
      /> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // 1 means the component takes the entire screen, 0.5 means takes half of the screen
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });
