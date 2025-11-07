import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <StatusBar backgroundColor="#1976D2" style="light" />
    <Stack screenOptions={{headerShown:false}} initialRouteName="splash">
      <Stack.Screen name="splash" />
      <Stack.Screen name="(auth)"/>
      <Stack.Screen name="(drawers)" />
      <Stack.Screen name="hotelDetails"/>

    </Stack>
    </>
  )
}
