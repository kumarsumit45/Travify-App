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

const PaymentsScreen = () => {
  const router = useRouter();

  const transactions = [
    {
      id: "1",
      hotelName: "Utsav Palace",
      date: "Dec 15, 2024",
      amount: "₹4,500",
      status: "Success",
      paymentMethod: "UPI",
    },
    {
      id: "2",
      hotelName: "Mountain Lodge",
      date: "Dec 10, 2024",
      amount: "₹8,448",
      status: "Success",
      paymentMethod: "Credit Card",
    },
    {
      id: "3",
      hotelName: "Riverside Retreat",
      date: "Nov 28, 2024",
      amount: "₹10,530",
      status: "Success",
      paymentMethod: "Debit Card",
    },
  ];

  const renderTransaction = ({ item }) => (
    <TouchableOpacity style={styles.transactionCard}>
      <View style={styles.transactionHeader}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={
              item.status === "Success"
                ? "checkmark-circle"
                : "close-circle"
            }
            size={28}
            color={item.status === "Success" ? "#10B981" : "#EF4444"}
          />
        </View>
        <View style={styles.transactionInfo}>
          <Text style={styles.hotelName}>{item.hotelName}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>

      <View style={styles.transactionFooter}>
        <View style={styles.paymentMethodContainer}>
          <Ionicons name="card-outline" size={16} color={COLORS.textSecondary} />
          <Text style={styles.paymentMethod}>{item.paymentMethod}</Text>
        </View>
        <Text
          style={[
            styles.status,
            item.status === "Success" ? styles.successStatus : styles.failedStatus,
          ]}
        >
          {item.status}
        </Text>
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
        <Text style={styles.headerTitle}>Payments</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Total Spent</Text>
          <Text style={styles.summaryValue}>₹23,478</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Transactions</Text>
          <Text style={styles.summaryValue}>{transactions.length}</Text>
        </View>
      </View>

      {/* Transactions List */}
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Transaction History</Text>
      </View>

      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="wallet-outline" size={80} color={COLORS.border} />
          <Text style={styles.emptyTitle}>No Transactions</Text>
          <Text style={styles.emptyText}>
            Your payment history will appear here
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
  summaryCard: {
    flexDirection: "row",
    backgroundColor: COLORS.button,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 16,
    padding: 20,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.white,
  },
  divider: {
    width: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 16,
  },
  listHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  transactionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  transactionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textDark,
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
  amount: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  transactionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  paymentMethodContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentMethod: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginLeft: 6,
  },
  status: {
    fontSize: 13,
    fontWeight: "600",
  },
  successStatus: {
    color: "#10B981",
  },
  failedStatus: {
    color: "#EF4444",
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

export default PaymentsScreen;
