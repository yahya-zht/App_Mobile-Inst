import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Nav() {
  const navigation = useNavigation();
  return (
    <View style={styles.bottom}>
      <View>
        <AntDesign
          name="home"
          size={24}
          color="black"
          style={styles.zone}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View>
        <Feather
          name="search"
          size={24}
          color="black"
          style={styles.zone}
          onPress={() => navigation.navigate("Search")}
        />
      </View>
      <View>
        <Feather
          name="plus-square"
          size={24}
          color="black"
          style={styles.zone}
          onPress={() => navigation.navigate("Upload")}
        />
      </View>
      <View>
        <Entypo
          name="video"
          size={24}
          color="black"
          style={styles.zone}
          onPress={() => navigation.navigate("Reel")}
        />
      </View>
      <View>
        <FontAwesome5
          name="user"
          size={24}
          color="black"
          style={styles.zone}
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  zone: {
    paddingVertical: 8,
    paddingHorizontal: 25,
    // backgroundColor: "blue",
  },
});
