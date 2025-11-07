import { Ionicons } from '@expo/vector-icons';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HorizontalCardList from '../../../components/featuresList/HorizontalCardList';
import HeaderComponent from '../../../components/header';
import HotelsList from '../../../components/hotelDetails/HotelsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../../constants/colors';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router=useRouter()
  const handelSearchBar = ()=>{
    router.navigate("search")
  }
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView  showsVerticalScrollIndicator={false}  >

      {/* Header */}

      <HeaderComponent showToggleMenu={true}/>

      {/* Background Image Section */}
      <ImageBackground
        source={require("../../../assets/images/beach-background.jpg")}
        style={styles.backgroundImage}
      >


        <View style={styles.overlay}>
          {/* Greeting Text */}
          <Text style={styles.greeting}>Hello, Traveller</Text>
          <Text style={styles.subtitle}>Let's Find Your Stay</Text>
          <Text style={styles.description}>
            A commission-free space to connect, book and explore
          </Text>

          {/* Search Bar */}
          <TouchableOpacity style={styles.searchContainer} activeOpacity={0.8} onPress={handelSearchBar}>
            <Ionicons name="search" size={20} color="#999" />
            <View style={styles.searchInput}>
              <Text style={{
                color:"#999"
              }}> Where </Text>
            </View>

            <Ionicons name="chevron-down" size={20} color="#999" />
          </TouchableOpacity>

          {/* Stats Badges */}
          <View style={styles.statsContainer}>
            <View style={styles.statBadge}>
              <Text style={styles.statText}>10,000+ Zero-Commission</Text>
              <Text style={styles.statText}>Bookings</Text>
            </View>
            <View style={styles.statBadge}>
              <Text style={styles.statText}>Trusted by 4,500+</Text>
              <Text style={styles.statText}>Hoteliers</Text>
            </View>
            <View style={styles.statBadge}>
              <Text style={styles.statText}>98% Traveller</Text>
              <Text style={styles.statText}>Satisfaction</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Horizontal Card List */}
      <View style={styles.cardListContainer}>
        <HorizontalCardList />
      </View>

      {/* Vertical Hotel Card List */}
      <HotelsList/>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tabBackground,
  },
  backgroundImage: {
    height: 600,
    justifyContent: 'center',
  },
  overlay: {
    padding: 20,
  },
  greeting: {
    fontSize: 32,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
    lineHeight: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  statBadge: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  statText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 14,
  },
  cardListContainer: {
    paddingVertical: 0,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;