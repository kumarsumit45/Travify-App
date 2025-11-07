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
import COLORS from "../../constants/colors";

const BookingsScreen = () => {
  const router = useRouter();

  const bookings = [
    {
      id: "1",
      hotelName: "Utsav Palace",
      location: "Uttarkashi",
      checkIn: "Dec 20, 2024",
      checkOut: "Dec 23, 2024",
      status: "Confirmed",
      price: "₹4,500",
    },
    {
      id: "2",
      hotelName: "Mountain Lodge",
      location: "Chopta",
      checkIn: "Jan 5, 2025",
      checkOut: "Jan 8, 2025",
      status: "Upcoming",
      price: "₹8,448",
    },
  ];

  const renderBooking = ({ item }) => (
    <TouchableOpacity style={styles.bookingCard}>
      <View style={styles.bookingHeader}>
        <View style={styles.iconContainer}>
          <Ionicons name="business" size={24} color={COLORS.primary} />
        </View>
        <View style={styles.bookingInfo}>
          <Text style={styles.hotelName}>{item.hotelName}</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={14} color={COLORS.textSecondary} />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
        <View
          style={[
            styles.statusBadge,
            item.status === "Confirmed"
              ? styles.confirmedBadge
              : styles.upcomingBadge,
          ]}
        >
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.bookingDetails}>
        <View style={styles.dateSection}>
          <Text style={styles.dateLabel}>Check-in</Text>
          <Text style={styles.dateValue}>{item.checkIn}</Text>
        </View>
        <Ionicons name="arrow-forward" size={20} color={COLORS.textSecondary} />
        <View style={styles.dateSection}>
          <Text style={styles.dateLabel}>Check-out</Text>
          <Text style={styles.dateValue}>{item.checkOut}</Text>
        </View>
      </View>

      <View style={styles.bookingFooter}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.textDark} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Bookings</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      {bookings.length > 0 ? (
        <FlatList
          data={bookings}
          renderItem={renderBooking}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="calendar-outline" size={80} color={COLORS.border} />
          <Text style={styles.emptyTitle}>No Bookings Yet</Text>
          <Text style={styles.emptyText}>
            Your booking history will appear here
          </Text>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  placeholder: {
    width: 32,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  bookingCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bookingHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.inputBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  bookingInfo: {
    flex: 1,
    marginLeft: 12,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginLeft: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  confirmedBadge: {
    backgroundColor: "#D1FAE5",
  },
  upcomingBadge: {
    backgroundColor: "#DBEAFE",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#065F46",
  },
  bookingDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },
  dateSection: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textDark,
  },
  bookingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.button,
  },
  viewButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textDark,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});

export default BookingsScreen;
