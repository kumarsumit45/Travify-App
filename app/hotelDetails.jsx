import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import COLORS from '../constants/colors';

const { width } = Dimensions.get('window');

const HotelDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  // Get hotel images based on hotel ID
  const getHotelImages = () => {
    const imageMap = {
      '1': require('../assets/images/hotel1.jpg'),
      '2': require('../assets/images/hotel2.jpg'),
      '3': require('../assets/images/hotel3.jpg'),
      '4': require('../assets/images/hotel4.jpg'),
    };

    const mainImage = imageMap[params.hotelId] || require('../assets/images/hotel1.jpg');

    return {
      mainImages: [
        mainImage,
        require('../assets/images/hotel2.jpg'),
        require('../assets/images/hotel3.jpg'),
        require('../assets/images/hotel4.jpg'),
      ],
      thumbnails: [
        mainImage,
        require('../assets/images/hotel2.jpg'),
        require('../assets/images/hotel3.jpg'),
      ],
    };
  };

  const images = getHotelImages();

  // Complete amenities list
  const allAmenities = [
    'Air Conditioning: Room Controlled',
    'Laundry: Paid',
    'Newspaper: Local Language',
    'Parking: Free',
    'Smoke Detector: Lobby',
    'WiFi: Free',
    'Room Service: 24/7',
    'Power Backup: Full',
    'Hot Water: 24 Hours',
    'Elevator: Available',
    'Wheelchair Accessible',
    'Pet Friendly',
    'Swimming Pool',
    'Gym & Fitness Center',
    'Restaurant: Multi-Cuisine',
    'Bar: Full Service',
    'Conference Room',
    'Spa & Wellness',
  ];

  const initialAmenitiesCount = 8;
  const displayedAmenities = showAllAmenities
    ? allAmenities
    : allAmenities.slice(0, initialAmenitiesCount);
  const remainingCount = allAmenities.length - initialAmenitiesCount;

  const hotelData = {
    name: params.hotelName || 'The Pahadi Organic',
    location: params.hotelLocation || 'Almora',
    mainImages: images.mainImages,
    thumbnails: images.thumbnails,
    amenities: displayedAmenities,
    propertyUSP: 'He is a Businessman and running an organic property for guest who wants a unique experience',
    price: params.commissionFreePrice || '₹4,000/P.N',
    commissioningPrice: params.commissioningPrice || '₹5,000/P.N',
    commissionFreePrice: params.commissionFreePrice || '₹4,000/P.N',
    discount: params.discountPercent ? `${params.discountPercent} than OTA's` : '20% less than OTA\'s',
    reviews: params.reviews || '89 Reviews',
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? hotelData.mainImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === hotelData.mainImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleChat = () => {
    router.push({
      pathname: '/(drawers)/(tabs)/chat',
      params: {
        hotelName: hotelData.name,
        hotelLocation: hotelData.location,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Image Gallery Section */}
        <View style={styles.imageSection}>
          {/* Back Button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Main Image */}
          <Image
            source={hotelData.mainImages[currentImageIndex]}
            style={styles.mainImage}
            resizeMode="cover"
          />

          {/* Navigation Arrows */}
          <TouchableOpacity
            style={[styles.arrowButton, styles.leftArrow]}
            onPress={handlePreviousImage}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.arrowButton, styles.rightArrow]}
            onPress={handleNextImage}
          >
            <Ionicons name="chevron-forward" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Thumbnail Images */}
          <View style={styles.thumbnailContainer}>
            {hotelData.thumbnails.map((thumbnail, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCurrentImageIndex(index)}
                style={styles.thumbnailWrapper}
              >
                <Image
                  source={thumbnail}
                  style={styles.thumbnail}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Hotel Name */}
        <View style={styles.nameSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="business" size={32} color={COLORS.primary} />
          </View>
          <View style={styles.nameLocationContainer}>
            <Text style={styles.hotelName}>{hotelData.name}</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location" size={16} color="#666" />
              <Text style={styles.locationText}>{hotelData.location}</Text>
            </View>
          </View>
        </View>

        {/* Amenities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.amenitiesContainer}>
            {hotelData.amenities.map((amenity, index) => (
              <View key={index} style={styles.amenityPill}>
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity onPress={() => setShowAllAmenities(!showAllAmenities)}>
            <Text style={styles.moreLink}>
              {showAllAmenities ? 'show less' : `+${remainingCount} more`}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Property USP Section */}
        <View style={styles.section}>
          <View style={styles.uspContainer}>
            <Text style={styles.uspTitle}>Property USP</Text>
            <Text style={styles.uspDescription}>{hotelData.propertyUSP}</Text>
          </View>
        </View>

        {/* Add spacing for fixed bottom bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Fixed Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.bottomActions}>
          <View style={styles.iconview}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleWishlist}
          >
            <Ionicons
              name={isWishlisted ? "heart" : "heart-outline"}
              size={24}
              color={isWishlisted ? "#e74c3c" : "#333"}
            />
            <Text style={styles.actionText}>Wishlist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={24} color="#333" />
            <Text style={styles.actionText}>Reviews</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-social-outline" size={24} color="#333" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>{hotelData.discount}</Text>
          </View>
        </View>

        <View style={styles.priceSection}>
          <View style={styles.priceInfo}>
            <View style={styles.priceColumn}>
              <Text style={styles.commissionedLabel}>Commissioned Price</Text>
              <Text style={styles.commissionedPrice}>{hotelData.commissioningPrice}</Text>
              <Text style={styles.commissionFreeLabel}>Commission Free Price</Text>
              <Text style={styles.price}>{hotelData.commissionFreePrice}</Text>
            </View>
            <View style={styles.commissionBadge}>
              <Text style={styles.commissionText}>Commission Free</Text>
              <Text style={styles.commissionText}>Price</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.chatButton}
            onPress={handleChat}
          >
            <Text style={styles.chatButtonText}>Chat Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  imageSection: {
    height: 350,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  arrowButton: {
    position: 'absolute',
    top: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
  },
  leftArrow: {
    left: 16,
  },
  rightArrow: {
    right: 16,
  },
  thumbnailContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  thumbnailWrapper: {
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  nameSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
    paddingBottom: 16,
  },
  logoContainer: {
    marginRight: 12,
    marginTop: 4,
  },
  nameLocationContainer: {
    flex: 1,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  amenityPill: {
    backgroundColor: '#e8d5f2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  amenityText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  moreLink: {
    fontSize: 16,
    color: '#8b5cf6',
    fontWeight: '600',
    marginTop: 12,
  },
  uspContainer: {
    backgroundColor: '#f3e8ff',
    padding: 20,
    borderRadius: 12,
  },
  uspTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  uspDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  bottomSpacer: {
    height: 180,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconview:{
    flexDirection:"row",
    gap:20,
  },
  actionButton: {
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    fontSize: 12,
    color: '#666',
  },
  discountContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  discountText: {
    fontSize: 12,
    color: '#8b5cf6',
    fontWeight: '600',
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  priceColumn: {
    flexDirection: 'column',
  },
  commissionedLabel: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
    marginBottom: 2,
  },
  commissionedPrice: {
    fontSize: 13,
    color: '#D00',
    textDecorationLine: 'line-through',
    marginBottom: 6,
    fontWeight: '600',
  },
  commissionFreeLabel: {
    fontSize: 11,
    color: '#16A34A',
    fontWeight: '600',
    marginBottom: 2,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  commissionBadge: {
    backgroundColor: '#ffd700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  commissionText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#000',
  },
  chatButton: {
    backgroundColor: '#8b5cf6',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 25,
    marginLeft:15
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HotelDetails;
