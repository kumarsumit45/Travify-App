import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <StatusBar backgroundColor="#E8D5F2" style="dark" />
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="(auth)"/>
      <Stack.Screen name="(drawers)" />
      <Stack.Screen name="hotelDetails"/>
      
    </Stack>
    </>
  )
}
