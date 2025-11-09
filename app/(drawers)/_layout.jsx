import React from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer } from "expo-router/drawer";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import COLORS from "../../constants/colors";

// replace with your local logo path
const LOGO = require("../../assets/images/Tlogo.jpg");

function CustomDrawerContent(props) {
  const { navigation, descriptors, state } = props;
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header: logo + app name */}
      <TouchableOpacity
        style={styles.header}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("(tabs)"); // navigate to Home or desired screen
          navigation.closeDrawer();
        }}
        accessibilityRole="button"
        accessibilityLabel="Open Home"
      >
        {/* <Image source={LOGO} style={styles.logo} resizeMode="contain" /> */}
        <View style={styles.logoContainer}>
          <Image source={LOGO} style={styles.logo} resizeMode="contain" />
        </View>
        <View style={styles.titleWrap}>
          <Text style={styles.appName}>Travifai</Text>
          <Text style={styles.subtitle}>Discover places you love</Text>
        </View>
      </TouchableOpacity>

      {/* keep the default drawer items below the header */}
      <View style={styles.items}>
        {/* Render all drawer items */}
        {state.routes.map((route, index) => {
          const { drawerLabel, drawerIcon, title } = descriptors[route.key].options;

          if (route.name === 'wishlist') {
            return null;
          }

          return (
            <DrawerItem
              key={route.key}
              label={drawerLabel !== undefined ? drawerLabel : title !== undefined ? title : route.name}
              icon={drawerIcon}
              focused={state.index === index}
              onPress={() => {
                navigation.navigate(route.name);
                navigation.closeDrawer();
              }}
            />
          );
        })}

        {/* Custom wishlist item that navigates directly to tabs wishlist */}
        <DrawerItem
          label="Wishlist"
          icon={({ size, color }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          )}
          onPress={() => {
            navigation.closeDrawer();
            router.push("/(drawers)/(tabs)/wishlist");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerContentStyle: {
          backgroundColor: COLORS.tabBackground,
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="treels"
        options={{
          title: "T-Reels",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="play-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="bookings"
        options={{
          title: "Bookings",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="payments"
        options={{
          title: "Payments",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="contact"
        options={{
          title: "Contact",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: "About Us",
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name="information-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="logout"
        options={{
          title: "Logout",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.tabBackground },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: { width: 40, height: 40, borderRadius: 20 },
  titleWrap: { marginLeft: 12 },
  appName: { fontSize: 24, fontWeight: "700", color: "#111" },
  subtitle: { fontSize: 12, color: "#666", marginTop: 2 },
  items: { flex: 1, paddingTop: 8 },
  logoIcon: {
    fontSize: 20,
  },
  logoContainer: {
    // width: 40,
    // height: 40,
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1.2,
    borderColor: "#2D7A3E", // Dark green
    justifyContent: "center",
    alignItems: "center",
  },
});
