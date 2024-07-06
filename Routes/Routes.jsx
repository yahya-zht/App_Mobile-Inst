import { View, Text, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Reel from "../pages/Reel";
import UploadPost from "../pages/UploadPost";
import Messages from "../pages/Messages";
import Likes from "../pages/Likes";
import Message from "../components/MessageComponents/Message";
export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: "none", // Disables animations
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              title: "Search",
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Profile",
            }}
          />
          <Stack.Screen
            name="Reel"
            component={Reel}
            options={{
              title: "Reel",
            }}
          />
          <Stack.Screen
            name="Upload"
            component={UploadPost}
            options={{
              title: "UploadPost",
            }}
          />
          <Stack.Screen
            name="Messages"
            component={Messages}
            options={{
              title: "Messages",
            }}
          />
          <Stack.Screen
            name="Likes"
            component={Likes}
            options={{
              title: "Likes",
            }}
          />
          <Stack.Screen
            name="Message"
            component={Message}
            options={{
              title: "Message",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
