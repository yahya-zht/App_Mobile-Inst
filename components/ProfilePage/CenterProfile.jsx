import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TopCenter from "./TopCenter";
import CenterCenter from "./CenterCenter";
import BottomCenter from "./BottomCenter";

export default function CenterProfile() {
  return (
    <View style={styles.container}>
      <TopCenter />
      <CenterCenter />
      <BottomCenter />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
  },
});
