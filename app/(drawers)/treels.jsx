import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get('window');



const TreelsScreen = () => {

  const router = useRouter();

  const onGoHome = ()=>{
    router.navigate("(tabs)")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Decorative Elements */}
        <View style={styles.decorativeTop} />

        {/* Coming Soon Section */}
        <View style={styles.comingSoonContainer}>
          {/* Megaphone Icon */}
          <Ionicons
            name="megaphone-outline"
            size={80}
            color="black" //#972eff
            style={styles.megaphone}
          />

          {/* Pink Curved Elements */}
          <View style={[styles.curve, styles.curveTop]} />
          <View style={[styles.curve, styles.curveRight]} />
          <View style={[styles.curve, styles.curveBottom]} />
          <View style={[styles.curve, styles.curveLeft]} />

          {/* Coming Soon Text */}
          <Text style={styles.comingSoonText}>COMING</Text>
          <Text style={styles.comingSoonText}>SOON</Text>
        </View>

        {/* Construction Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.heading}>This Page is Under Construction</Text>
          <Text style={styles.description}>
            We're working hard to bring this feature to life. Please check back
            soon or return to the home page.
          </Text>
        </View>

        {/* Go to Home Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={onGoHome}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TreelsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  decorativeTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#F0F0F0',
  },
  comingSoonContainer: {
    alignItems: 'center',
    marginBottom: 60,
    position: 'relative',
    height: 250,
    justifyContent: 'center',
  },
  megaphone: {
    position: 'absolute',
    left: -60,
    bottom: 40,
    zIndex: 10,
  },
  curve: {
    position: 'absolute',
    borderWidth: 8,
    borderColor: '#FFC0D9',
    backgroundColor: 'transparent',
  },
  curveTop: {
    width: 120,
    height: 40,
    borderRadius: 60,
    borderBottomWidth: 0,
    top: -10,
    left: 40,
  },
  curveRight: {
    width: 60,
    height: 100,
    borderRadius: 30,
    borderLeftWidth: 0,
    right: -20,
    top: 30,
  },
  curveBottom: {
    width: 100,
    height: 50,
    borderRadius: 50,
    borderTopWidth: 0,
    bottom: 0,
    right: 20,
  },
  curveLeft: {
    width: 50,
    height: 80,
    borderRadius: 25,
    borderRightWidth: 0,
    left: -15,
    top: 60,
  },
  comingSoonText: {
    fontSize: 52,
    fontWeight: '900',
    color: '#000',
    textAlign: 'center',
    lineHeight: 60,
    zIndex: 5,
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#7C3AED',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginTop: 20,
    width: '80%',
    maxWidth: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});