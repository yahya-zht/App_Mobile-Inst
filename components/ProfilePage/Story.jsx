import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Story() {
  return (
    <View>
      <View style={styles.StoryImage}>
        <Text>IMG S</Text>
      </View>
      <Text style={{ textAlign: "center" }}>Story</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  StoryImage: {
    width: 70,
    height: 70,
    backgroundColor: "gray",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 2,
  },
});
