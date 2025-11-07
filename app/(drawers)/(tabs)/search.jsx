import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import COLORS from "../../../constants/colors";
import HotelCard from "../../../components/hotelDetails/HotelCard";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HOTELS_DATA = [
  {
    id: '1',
    name: 'Utsav palace',
    image: require('../../../assets/images/hotel1.jpg'),
    location: 'Uttarkashi',
    discountPercent: '10% less',
    commissioning_price: '₹3650/P.N',
    commissionFreePrice: '₹1500/P.N',
    reviews: '234 Reviews',
    wishlist: false,
  },
  {
    id: '2',
    name: 'Shambhal House',
    image: require('../../../assets/images/hotel2.jpg'),
    location: 'Nanital',
    discountPercent: '20% less',
    commissioning_price: '₹30000/P.N',
    commissionFreePrice: '₹25000/P.N',
    reviews: '156 Reviews',
    wishlist: false,
  },
  {
    id: '3',
    name: 'The Pahadi Organic',
    image: require('../../../assets/images/hotel3.jpg'),
    location: 'Almora',
    discountPercent: '25% less',
    commissioning_price: '₹4800/P.N',
    commissionFreePrice: '₹4000/P.N',
    reviews: '89 Reviews',
    wishlist: false,
  },
  {
    id: '4',
    name: 'Himalayan Heights',
    image: require('../../../assets/images/hotel4.jpg'),
    location: 'Mussoorie',
    discountPercent: '15% less',
    commissioning_price: '₹5000/P.N',
    commissionFreePrice: '₹4250/P.N',
    reviews: '302 Reviews',
    wishlist: false,
  },
  {
    id: '5',
    name: 'Valley View Resort',
    image: require('../../../assets/images/hotel1.jpg'),
    location: 'Auli',
    discountPercent: '18% less',
    commissioning_price: '₹6000/P.N',
    commissionFreePrice: '₹4920/P.N',
    reviews: '178 Reviews',
    wishlist: false,
  },
  {
    id: '6',
    name: 'Mountain Lodge',
    image: require('../../../assets/images/hotel2.jpg'),
    location: 'Chopta',
    discountPercent: '12% less',
    commissioning_price: '₹3200/P.N',
    commissionFreePrice: '₹2816/P.N',
    reviews: '245 Reviews',
    wishlist: false,
  },
  {
    id: '7',
    name: 'Riverside Retreat',
    image: require('../../../assets/images/hotel3.jpg'),
    location: 'Rishikesh',
    discountPercent: '22% less',
    commissioning_price: '₹4500/P.N',
    commissionFreePrice: '₹3510/P.N',
    reviews: '412 Reviews',
    wishlist: false,
  },
  {
    id: '8',
    name: 'Peak View Hotel',
    image: require('../../../assets/images/hotel4.jpg'),
    location: 'Auli',
    discountPercent: '16% less',
    commissioning_price: '₹5500/P.N',
    commissionFreePrice: '₹4620/P.N',
    reviews: '198 Reviews',
    wishlist: false,
  },
  {
    id: '9',
    name: 'Forest Cottage',
    image: require('../../../assets/images/hotel1.jpg'),
    location: 'Nainital',
    discountPercent: '14% less',
    commissioning_price: '₹4000/P.N',
    commissionFreePrice: '₹3440/P.N',
    reviews: '267 Reviews',
    wishlist: false,
  },
  {
    id: '10',
    name: 'Lakeside Palace',
    image: require('../../../assets/images/hotel1.jpg'),
    location: 'Bhimtal',
    discountPercent: '19% less',
    commissioning_price: '₹5200/P.N',
    commissionFreePrice: '₹4212/P.N',
    reviews: '334 Reviews',
    wishlist: false,
  },
  {
    id: '11',
    name: 'Starlight Inn',
    image: require("../../../assets/images/hotel3.jpg"),
    location: 'Kausani',
    discountPercent: '11% less',
    commissioning_price: '₹3800/P.N',
    commissionFreePrice: '₹3382/P.N',
    reviews: '156 Reviews',
    wishlist: false,
  },
  {
    id: '12',
    name: 'Sunset Paradise',
    image: require('../../../assets/images/hotel4.jpg'),
    location: 'Ranikhet',
    discountPercent: '21% less',
    commissioning_price: '₹4700/P.N',
    commissionFreePrice: '₹3713/P.N',
    reviews: '289 Reviews',
    wishlist: false,
  },
];

const SearchScreen = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeSearchQuery, setActiveSearchQuery] = useState("");

  const popularDestinations = [
    "Uttarkashi",
    "Nainital",
    "Almora",
    "Mussoorie",
    "Auli",
    "Chopta",
    "Rishikesh",
    "Kausani",
  ];

  // Filter hotels based on active search query (after search button is pressed)
  const filteredHotels = useMemo(() => {
    if (!hasSearched) {
      return HOTELS_DATA;
    }

    if (!activeSearchQuery.trim()) {
      return HOTELS_DATA;
    }

    const query = activeSearchQuery.toLowerCase().trim();
    return HOTELS_DATA.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(query) ||
        hotel.location.toLowerCase().includes(query)
    );
  }, [hasSearched, activeSearchQuery]);

  const handleSearch = () => {
    setActiveSearchQuery(searchQuery);
    setHasSearched(true);
  };

  const handleChat = (hotel) => {
    router.push({
      pathname: '/(drawers)/(tabs)/chat',
      params: {
        hotelName: hotel.name,
        hotelLocation: hotel.location,
      },
    });
  };

  const handleDestinationClick = (destination) => {
    setSearchQuery(destination);
    setActiveSearchQuery(destination);
    setHasSearched(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
            <Text style={styles.headerTitle}>Search</Text>
            <MaterialCommunityIcons name="keyboard-variant" size={30} color={COLORS.primary} style={{
              marginTop:5
            }}/>

          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Main Search Bar */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color={COLORS.textSecondary} />
            <TextInput
              style={styles.searchInput}
              placeholder="Where do you want to go?"
              placeholderTextColor={COLORS.placeholderText}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={COLORS.textSecondary}
                />
              </TouchableOpacity>
            )}
          </View>

          {/* Date and Guest Selection */}
          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.optionBox}>
              <Ionicons name="calendar" size={18} color={COLORS.primary} />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionLabel}>Check-in</Text>
                <Text style={styles.optionValue}>
                  {checkInDate || "Add date"}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBox}>
              <Ionicons
                name="calendar-outline"
                size={18}
                color={COLORS.primary}
              />
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionLabel}>Check-out</Text>
                <Text style={styles.optionValue}>
                  {checkOutDate || "Add date"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.guestsBox}>
            <Ionicons name="people" size={18} color={COLORS.primary} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionLabel}>Guests</Text>
              <Text style={styles.optionValue}>
                {guests} {guests === 1 ? "Guest" : "Guests"}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={18} color={COLORS.textSecondary} />
          </TouchableOpacity>

          {/* Search Button */}
          <TouchableOpacity
            style={styles.searchActionButton}
            activeOpacity={0.8}
            onPress={handleSearch}
          >
            <Ionicons name="search" size={20} color={COLORS.white} />
            <Text style={styles.searchActionButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Destinations */}
        <View style={styles.destinationsSection}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
          <View style={styles.destinationsGrid}>
            {popularDestinations.map((destination, index) => (
              <TouchableOpacity
                key={index}
                style={styles.destinationChip}
                onPress={() => handleDestinationClick(destination)}
              >
                <Ionicons
                  name="location-sharp"
                  size={14}
                  color={COLORS.primary}
                />
                <Text style={styles.destinationText}>{destination}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Search Results */}
        <View style={styles.resultsSection}>
          <View style={styles.resultHeader}>
            <Text style={styles.sectionTitle}>
              {hasSearched && activeSearchQuery ? "Search Results" : "All Hotels"}
            </Text>
            <Text style={styles.resultCount}>
              {filteredHotels.length} found
            </Text>
          </View>

          {filteredHotels.length > 0 ? (
            <FlatList
              data={filteredHotels}
              renderItem={({ item }) => (
                <HotelCard
                  hotel={item}
                  onChat={() => handleChat(item)}
                />
              )}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View style={styles.noResultsContainer}>
              <Ionicons name="search-outline" size={64} color={COLORS.textSecondary} />
              <Text style={styles.noResultsTitle}>No Hotels Found</Text>
              <Text style={styles.noResultsText}>
                We couldn't find any hotels matching "{activeSearchQuery}"
              </Text>
              <Text style={styles.noResultsSubtext}>
                Try searching with different keywords
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

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
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: COLORS.textDark,
  },
  optionsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  optionBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  guestsBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  optionLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  optionValue: {
    fontSize: 14,
    color: COLORS.textDark,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textDark,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  destinationsSection: {
    marginBottom: 24,
  },
  destinationsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 8,
  },
  destinationChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  destinationText: {
    fontSize: 13,
    color: COLORS.textDark,
    marginLeft: 6,
    fontWeight: "500",
  },
  resultsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  resultCount: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: "500",
  },
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  noResultsTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textDark,
    marginTop: 16,
    marginBottom: 8,
  },
  noResultsText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 4,
  },
  noResultsSubtext: {
    fontSize: 13,
    color: COLORS.placeholderText,
    textAlign: "center",
  },
  searchActionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.button,
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 12,
    gap: 8,
  },
  searchActionButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },
});

export default SearchScreen;
