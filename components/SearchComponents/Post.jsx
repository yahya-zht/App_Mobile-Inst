import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Post() {
  return (
    <View style={styles.post}>
      <Text>Post</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  post: {
    height: 130,
    width: 130,
    padding: 10,
    backgroundColor: "gray",
    marginBottom: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
