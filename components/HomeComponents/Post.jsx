import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <View style={styles.TopLeft}>
          <View style={styles.profile}></View>
          <View style={{ marginLeft: 5 }}>
            <Text>Name</Text>
          </View>
        </View>
        <View style={styles.TopRight}>
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </View>
      </View>
      <View style={styles.Center}>
        <View>
          <Text>Image</Text>
        </View>
      </View>
      <View style={styles.Bottom}>
        <View style={styles.BottomTop}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Octicons name="heart" size={24} color="black" />
            <FontAwesome5
              name="comment"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <Feather
              name="send"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
          </View>
          <View>
            <Feather name="save" size={24} color="black" />
          </View>
        </View>
        <View style={styles.BottomBottom}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            accusamus animi consequuntur sit placeat in! Distinctio!
            Description....
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 3,
  },
  Top: {
    marginVertical: 6,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TopLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  TopRight: {},
  profile: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  Center: {
    backgroundColor: "gray",
    height: 370,
    width: "100%",
  },
  Bottom: {
    margin: 7,
    marginHorizontal: 8,
  },
  BottomTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  BottomBottom: {},
});
