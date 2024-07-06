import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function TopCenter() {
  return (
    <View style={styles.container}>
      <View style={styles.profileImage}>
        <Text>Profile Picture</Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          1802
        </Text>
        <Text style={{ textAlign: "center", fontSize: 17, opacity: 0.5 }}>
          Post
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          453
        </Text>
        <Text style={{ textAlign: "center", fontSize: 17, opacity: 0.5 }}>
          Followers
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          182
        </Text>
        <Text style={{ textAlign: "center", fontSize: 17, opacity: 0.5 }}>
          Following
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 3,
    paddingVertical: 10,
    // backgroundColor: "red",
    alignItems: "center",
  },
  profileImage: {
    width: 90,
    height: 90,
    backgroundColor: "gray",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
});
