import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Profile = (props) => {
  return (
    <View style={{ marginHorizontal: 5 }}>
      <View style={styles.Img}>
        <Text>Profile {props.n}</Text>
      </View>
      <View>
        <Text>UserName</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Img: {
    width: 60,
    height: 60,
    backgroundColor: "gray",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
});

export default Profile;
