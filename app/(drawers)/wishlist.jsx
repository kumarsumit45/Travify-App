import { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import COLORS from "../../constants/colors";

const WishlistRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Use immediate navigation with push to avoid blank screen
    const timer = setTimeout(() => {
      router.push("(drawers)/(tabs)/wishlist");
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Show a loading indicator while redirecting
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tabBackground,
  },
});

export default WishlistRedirect;
