import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
export default function ReelPost() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={{ marginStart: 10, marginBottom: 13 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text style={styles.Img}>IMG</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              UserName
            </Text>
            <Text style={styles.btnFollow}>Follow</Text>
          </View>
          <View>
            <Text>#Top #Tag #Name...</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 7 }}>
            <View style={styles.tag}>
              <FontAwesome6 name="music" size={15} color="white" />
              <Text style={{ marginStart: 5, color: "white" }}>lalalad</Text>
            </View>
            <View style={styles.tag}>
              <Fontisto name="map-marker-alt" size={15} color="white" />
              <Text style={{ marginStart: 5, color: "white" }}>lalalad</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.rightTop}>
          <Feather
            name="camera"
            size={27}
            color="white"
            style={{ marginTop: 10 }}
          />
        </View>
        <View style={styles.rightBottom}>
          <View>
            <Octicons name="heart" size={27} color="white" />
            <Text style={{ textAlign: "center", color: "white" }}>254</Text>
          </View>
          <View style={styles.MTop}>
            <FontAwesome5 name="comment" size={27} color="white" />
            <Text style={{ textAlign: "center", color: "white" }}>64</Text>
          </View>
          <View style={styles.MTop}>
            <Feather name="send" size={27} color="white" />
            <Text style={{ textAlign: "center", color: "white" }}>24</Text>
          </View>
          <View style={styles.MTop}>
            <Ionicons name="ellipsis-vertical" size={27} color="white" />
          </View>
          <View style={styles.MTop}>
            <Fontisto name="applemusic" size={27} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 700,
    backgroundColor: "black",
    flexDirection: "row",
  },
  left: {
    flex: 7,
    // backgroundColor: "red",
    justifyContent: "flex-end",
  },
  right: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "blue",
  },
  rightTop: {
    flex: 1,
    // backgroundColor: "green",
    marginHorizontal: "auto",
    paddingHorizontal: 6,
  },
  rightBottom: {
    flex: 1,
    // backgroundColor: "purple",
    marginVertical: 10,
    marginHorizontal: "auto",
    paddingHorizontal: 6,
    justifyContent: "flex-end",
  },
  MTop: {
    marginTop: 15,
  },
  Img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginEnd: 6,
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    borderColor: "pink",
    borderWidth: 2,
    textAlignVertical: "center",
    backgroundColor: "gray",
  },
  btnFollow: {
    color: "black",
    marginStart: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    textAlignVertical: "center",
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 13,
    textTransform: "uppercase",
    backgroundColor: "white",
    textAlign: "center",
    paddingVertical: 5,
  },
  tag: {
    backgroundColor: "rgba(190,190,190,0.5)",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    marginHorizontal: 2,
    fontSize: 12,
    alignItems: "center",
    flexDirection: "row",
  },
});
