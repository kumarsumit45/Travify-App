import { Ionicons } from '@expo/vector-icons';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import useWishlistStore from '../../store/useWishlistStore';


export default function HotelCard({
  hotel,
  onChat,
}) {
  const { toggleWishlist, wishlist } = useWishlistStore();
  const isWishlisted = wishlist.some((item) => item.id === hotel.id);
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.header}>
        <View style={styles.hotelInfo}>
          <View style={styles.iconNameContainer}>
            <Ionicons name="home" size={24} color="#333" style={styles.icon} />
            <Text style={styles.hotelName}>{hotel.name}</Text>
          </View>
        </View>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{hotel.discountPercent}</Text>
          <Text style={styles.badgeLabel}>than OTA's</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={hotel.image}
          style={styles.image}
          imageStyle={{ borderRadius: 12 }}
        >
          <View style={styles.overlayButtons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => toggleWishlist(hotel)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isWishlisted ? 'heart' : 'heart-outline'}
                size={24}
                color={isWishlisted ? '#FF6B6B' : '#fff'}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Ionicons name="share-social" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.reviewsOverlay}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.reviewsText}>{hotel.reviews}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.locationContainer}>
        <Ionicons name="location" size={16} color="#666" />
        <Text style={styles.locationText}>{hotel.location}</Text>
      </View>

      <View style={styles.priceContainer}>
        <View style={styles.priceInfo}>
          <Text style={styles.priceLabel}>Commissioned Price</Text>
          <Text style={styles.strikePrice}>{hotel.commissioning_price}</Text>

          <Text style={styles.commissionFreeLabel}>
            Commission Free Price
          </Text>
          <Text style={styles.priceValue}>{hotel.commissionFreePrice}</Text>
          <Text style={styles.feesText}>(Fees + GST)</Text>
        </View>

        <TouchableOpacity
          style={styles.chatButton}
          onPress={onChat}
          activeOpacity={0.8}
        >
          <Text style={styles.chatButtonText}>Chat Now</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  hotelInfo: {
    flex: 1,
  },
  iconNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  discountBadge: {
    backgroundColor: '#E8DAEF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  discountText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6B46C1',
  },
  badgeLabel: {
    fontSize: 10,
    color: '#6B46C1',
    marginTop: 2,
  },
  imageContainer: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
    justifyContent: 'space-between',
    padding: 12,
  },
  overlayButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewsOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  reviewsText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  priceInfo: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
  },
  strikePrice: {
    fontSize: 12,
    color: '#D00',
    textDecorationLine: 'line-through',
    marginBottom: 6,
  },
  commissionFreeLabel: {
    fontSize: 11,
    color: '#16A34A',
    fontWeight: '600',
    marginBottom: 2,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 2,
  },
  feesText: {
    fontSize: 10,
    color: '#999',
  },
  chatButton: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 24,
    marginLeft: 12,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});