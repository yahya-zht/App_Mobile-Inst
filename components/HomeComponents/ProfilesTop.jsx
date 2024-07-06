import { View, Text, ScrollView } from "react-native";
import React from "react";
import Profile from "./Profile";

export default function ProfilesTop() {
  const L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {L.map((a, index) => {
        return <Profile key={index} n={a} />;
      })}
    </ScrollView>
  );
}
