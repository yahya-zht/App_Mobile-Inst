import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function MessageList() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Message")}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.Image}>IMG</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 17 }}>UserName</Text>
          <Text style={{ opacity: 0.5 }}>Sent 13m ago</Text>
        </View>
      </View>
      <View>
        <Feather name="camera" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingStart: 5,
    paddingEnd: 10,
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 7,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    justifyContent: "space-between",
    alignItems: "center",
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    marginEnd: 10,
  },
});
