import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Nav from "../components/Nav";

export default function UploadPost() {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <Text>UploadPost</Text>
      </View>
      <Nav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
