import React from "react";
import { View, Image, StyleSheet } from "react-native";
import App from "../../App";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    // set the flex direction to row to lay them out horizontally next to each other
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      {/* by default, all containers flex direction are set to column 
      adding another container here so the content inside are all set to column */}
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    // to make the corner round like a circle, need to apply at least half of its size
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
