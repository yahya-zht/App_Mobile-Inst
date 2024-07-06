import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Story from "./Story";
import { AntDesign } from "@expo/vector-icons";

export default function BottomCenter() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginVertical: "auto",
          marginBottom: 5,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold" }}>Storys</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
        </View>
        <View>
          <AntDesign name="up" size={15} color="black" />
        </View>
      </View>
      <View style={{ marginLeft: 10, marginVertical: 6 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
