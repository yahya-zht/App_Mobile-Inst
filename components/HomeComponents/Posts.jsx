import { View, Text, ScrollView } from "react-native";
import React from "react";
import Post from "./Post";

export default function Posts() {
  return (
    <ScrollView>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
}
