import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StatusBar as RNStatusBar } from "react-native";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    // Set status bar color for Android
    if (Platform.OS === "android") {
      RNStatusBar.setBackgroundColor("#1976D2");
      RNStatusBar.setBarStyle("light-content");
    }
  }, []);

  return (
    <>
    <StatusBar style="light" backgroundColor="#1976D2" translucent={false}/>
    <Stack screenOptions={{headerShown:false}} initialRouteName="splash">
      <Stack.Screen name="splash" />
      <Stack.Screen name="(auth)"/>
      <Stack.Screen name="(drawers)" />
      <Stack.Screen name="hotelDetails"/>

    </Stack>
    </>
  )
}
