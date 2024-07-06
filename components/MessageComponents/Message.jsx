import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Message() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ marginEnd: 10 }}
            onPress={() => navigation.navigate("Messages")}
          >
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.Image}>IMG</Text>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Name</Text>
              <Text style={{ fontSize: 14, opacity: 0.5 }}>UserName</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            name="videocamera"
            size={24}
            color="black"
            style={{ marginEnd: 15 }}
          />
          <Feather
            name="phone"
            size={24}
            color="black"
            style={{ marginEnd: 5 }}
          />
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <View>
          <Text style={styles.messageMe}>Your Message..</Text>
          <Text style={styles.messageMe}>Your Message...</Text>
          <Text style={styles.message}>Your Message...</Text>
          <Text style={styles.message}>Your Message...</Text>
          <Text style={styles.messageMe}>Your Message...</Text>
          <Text style={styles.message}>Your Message...</Text>
        </View>
      </View>
      <View style={styles.plaseInput}>
        <View style={styles.cam}>
          <Entypo name="camera" size={24} color="black" />
        </View>
        <View style={{ marginHorizontal: 10, flex: 6 }}>
          <TextInput placeholder="Message..."></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Feather
            name="mic"
            size={24}
            color="white"
            style={{ marginEnd: 5 }}
          />
          <Feather
            name="image"
            size={24}
            color="black"
            style={{ marginEnd: 5 }}
          />
          <MaterialCommunityIcons
            name="sticker-emoji"
            size={24}
            color="black"
            style={{ marginEnd: 5 }}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "yellow",
  },
  Image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: "center",
    textAlignVertical: "center",
    marginEnd: 10,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  plaseInput: {
    backgroundColor: "rgba(255, 255, 255,1)",
    height: 50,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cam: {
    flex: 1,
    width: 40,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "blue",
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 10,
    textAlignVertical: "center",
  },
  messageMe: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "green",
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 10,
    color: "white",
    alignSelf: "flex-end",
  },
});
