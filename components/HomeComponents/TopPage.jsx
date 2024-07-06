import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Instagram</Text>
      </View>
      <View style={styles.flex}>
        <Octicons
          name="heart"
          size={24}
          color="black"
          style={styles.zone}
          onPress={() => navigation.navigate("Likes")}
        />
        <Feather
          name="send"
          size={24}
          color="black"
          style={[styles.zone, { marginLeft: 5 }]}
          onPress={() => navigation.navigate("Messages")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // backgroundColor: "white",
  },
  flex: {
    flexDirection: "row",
  },
  zone: {
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});
