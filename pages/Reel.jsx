import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Nav from "../components/Nav";
import ReelPost from "../components/ReelComponents/ReelPost";

export default function Reel() {
  const L = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {L.map((a, index) => {
          return (
            <View style={{ height: 764 }} key={index} n={a}>
              <ReelPost />
            </View>
          );
        })}
      </ScrollView>
      <Nav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
