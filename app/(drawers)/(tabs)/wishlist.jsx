import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import COLORS from "../../../constants/colors";
import HotelCard from "../../../components/hotelDetails/HotelCard";
import useWishlistStore from "../../../store/useWishlistStore";

const WishlistScreen = () => {
  const router = useRouter();
  const { wishlist, clearWishlist } = useWishlistStore();

  const handleChat = (hotel) => {
    router.push({
      pathname: "/(drawers)/(tabs)/chat",
      params: {
        hotelName: hotel.name,
        hotelLocation: hotel.location,
      },
    });
  };

  const handleClearAll = () => {
    clearWishlist();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View>
            <Text style={styles.headerTitle}>My Wishlist</Text>
            <Text style={styles.headerSubtitle}>
              {wishlist.length} {wishlist.length === 1 ? "hotel" : "hotels"}{" "}
              saved
            </Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => router.push("/(drawers)/(tabs)/search")}
          >
            <Ionicons name="search" size={20} color={COLORS.primary} />
          </TouchableOpacity>
          {wishlist.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearAll}
            >
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Wishlist Content */}
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          renderItem={({ item }) => (
            <HotelCard hotel={item} onChat={() => handleChat(item)} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.emptyIconContainer}>
            <Ionicons name="heart-outline" size={80} color={COLORS.border} />
          </View>
          <Text style={styles.emptyTitle}>No Favorites Yet</Text>
          <Text style={styles.emptyText}>
            Start exploring and tap the heart icon to save your favorite hotels
            here
          </Text>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push("/(drawers)/(tabs)/search")}
          >
            <Ionicons name="search" size={20} color={COLORS.white} />
            <Text style={styles.exploreButtonText}>Explore Hotels</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tabBackground,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.inputBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  clearButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primary,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyIconContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: COLORS.inputBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 32,
  },
  exploreButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.button,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  exploreButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },
});

export default WishlistScreen;
