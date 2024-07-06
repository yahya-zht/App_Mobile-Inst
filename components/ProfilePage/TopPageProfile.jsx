import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
export default function TopPageProfile() {
  return (
    <View style={styles.topPage}>
      <View>
        <Text style={{ marginStart: 15, fontSize: 25, fontWeight: "bold" }}>
          UserName
        </Text>
      </View>
      <View style={styles.flex}>
        <Feather
          name="plus-square"
          size={27}
          color="black"
          style={{ marginEnd: 15 }}
        />
        <Foundation
          name="list"
          size={27}
          color="black"
          style={{ marginEnd: 15 }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topPage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 3,
    paddingVertical: 10,
  },
  flex: {
    flexDirection: "row",
  },
});
