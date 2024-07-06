import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import TopPage from "../components/HomeComponents/TopPage";
import ProfilesTop from "../components/HomeComponents/ProfilesTop";
import Posts from "../components/HomeComponents/Posts";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.topPage}>
        <TopPage />
      </View>
      <View style={styles.profile}>
        <ProfilesTop />
      </View>
      <View style={styles.contante}>
        <Posts />
      </View>
      <View style={styles.bottomm}>
        <Nav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 0,
    fontSize: 12,
    fontWeight: "bold",
  },
  topPage: {},
  profile: {
    flex: 1.8,
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 2,
    alignContent: "center",
  },
  contante: {
    flex: 13,
    backgroundColor: "white",
  },
  bottomm: {
    // flex: 1.2,
  },
});
