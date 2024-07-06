import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Post from "../components/SearchComponents/Post";
import Nav from "../components/Nav";

export default function Search() {
  const L = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23,
  ];
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <AntDesign
          name="search1"
          size={17}
          color="black"
          style={{ paddingHorizontal: 10 }}
        />
        <TextInput
          style={{
            fontSize: 15,
            fontWeight: "bold",
            width: "85%",
          }}
          placeholder="Search"
        ></TextInput>
      </View>
      <View style={styles.containerPosts}>
        <ScrollView contentContainerStyle={styles.posts}>
          {L.map((L, i) => (
            <Post key={i} />
          ))}
        </ScrollView>
      </View>
      <Nav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flex: 0.7,
    alignItems: "center",
    backgroundColor: "rgb(200, 200, 200)",
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  containerPosts: {
    flex: 20,
    // backgroundColor: "blue",
  },
  posts: {
    // paddingBottom: 95,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
