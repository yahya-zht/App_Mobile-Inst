import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Story from "./Story";
import BottomTopProfile from "./BottomTopProfile";
import Post from "./Post";

export default function BottomProfile() {
  return (
    <View>
      <BottomTopProfile />
      <View>
        <ScrollView contentContainerStyle={styles.posts}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  posts: {
    paddingBottom: 95,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
