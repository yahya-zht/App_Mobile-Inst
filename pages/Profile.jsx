import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import TopPageProfile from "../components/ProfilePage/TopPageProfile";
import CenterProfile from "../components/ProfilePage/CenterProfile";
import BottomProfile from "../components/ProfilePage/BottomProfile";
import Nav from "../components/Nav";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.TopPage}>
        <TopPageProfile />
      </View>
      <View style={styles.CenterPage}>
        <CenterProfile />
      </View>
      <View style={styles.Bottom}>
        <BottomProfile />
      </View>
      <Nav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  profileImage: {},
  profileName: {},
  profileDescription: {},
  postList: {},
  posts: {},
  TopPage: {
    flex: 1,
    justifyContent: "center",
  },
  CenterPage: {
    flex: 6,
  },
  Bottom: {
    flex: 8,
    backgroundColor: "white",
  },
});
