import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";
import Nav from "../components/Nav";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MessageList from "../components/MessageComponents/MessageList";

export default function Messages() {
  const L = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  return (
    <View style={styles.container}>
      <View style={styles.plase}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
            marginHorizontal: 30,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>UserName</Text>
          <View>
            <Entypo name="new-message" size={25} color="black" />
          </View>
        </View>
        <View>
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
        </View>
        <View style={{ flexDirection: "row", marginStart: 15 }}>
          <View style={{ margin: 10 }}>
            <Text style={styles.Image}>IMG</Text>
            <Text>UserName</Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={styles.Image}>IMG</Text>
            <Text>UserName</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginVertical: 5,
            }}
          >
            <Text>Message</Text>
            <Text>Requests</Text>
          </View>
          <View>
            <ScrollView>
              {L.map((item, i) => (
                <MessageList key={i} />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <Nav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  plase: {
    flex: 1,
  },
  search: {
    alignItems: "center",
    backgroundColor: "rgb(200, 200, 200)",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    marginEnd: 10,
  },
});
