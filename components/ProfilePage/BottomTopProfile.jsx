import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function BottomTopProfile() {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome6 name="table-cells" size={27} color="black" />
      </View>
      <View>
        <Entypo name="video" size={27} color="black" />
      </View>
      <View>
        <FontAwesome6 name="circle-user" size={27} color="black" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
