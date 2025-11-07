import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import COLORS from "../../constants/colors";

const LogoutScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => router.back(),
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            // Add logout logic here
            // Clear user session, tokens, etc.
            console.log("User logged out");
            router.replace("/(auth)");
          },
        },
      ],
      { cancelable: true }
    );
  };

  React.useEffect(() => {
    handleLogout();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="log-out-outline" size={80} color={COLORS.button} />
        </View>
        <Text style={styles.title}>Logging Out...</Text>
        <Text style={styles.message}>Please wait while we sign you out</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tabBackground,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  iconContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.inputBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 12,
  },
  message: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});

export default LogoutScreen;
