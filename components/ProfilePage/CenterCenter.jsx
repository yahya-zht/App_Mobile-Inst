import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CenterCenter() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 5 }}>
        Name
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque
        inventore, fuga...
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    marginHorizontal: 15,
    marginTop: 5,
  },
});
