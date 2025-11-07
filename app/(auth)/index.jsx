import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../assets/styles/signIn.styles";
import HeaderComponent from '../../components/header';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      // if(!email || !password){
      //   return(
      //     Alert.alert("Error","Please enter all the fields.")
      //   )
      // }
      // // Dummy credentials
      // const DUMMY_EMAIL = 'sumit@gmail.com';
      // const DUMMY_PASSWORD = '123456';

      // // Check if credentials match
      // if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      //   // Navigate to drawer/index on successful login
      //   router.replace('/(drawers)');
      // } else {
      //   // Show error alert for invalid credentials
      //   Alert.alert('Error', 'Invalid credentials');
      // }
      router.replace('/(drawers)');
    } catch (error) {
      console.error('Sign in error:', error);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    // navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/beach-background.jpg')} //../assets/beach-background.jpg
      style={styles.container}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoid}
        >
          <HeaderComponent/>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.formCard}>
              {/* Header */}
              <Text style={styles.title}>Sign In</Text>
              <Text style={styles.subtitle}>Welcome to Travifai</Text>

              {/* Email Field */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="you@example.com"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  editable={!loading}
                />
              </View>

              {/* Password Field */}
              <View style={styles.fieldContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="••••••••"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    editable={!loading}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    disabled={loading}
                  >
                    <Ionicons
                      name={showPassword ? 'eye' : 'eye-off'}
                      size={20}
                      color="#666"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign In Button */}
              <TouchableOpacity
                style={[
                  styles.signInButton,
                  loading && styles.signInButtonDisabled,
                ]}
                onPress={handleSignIn}
                activeOpacity={0.8}
                disabled={loading}
              >
                <Text style={styles.signInButtonText}>
                  {loading ? 'Signing In...' : 'Sign In'}
                </Text>
              </TouchableOpacity>

              {/* Sign Up Link */}
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don't have any account? </Text>
                <TouchableOpacity onPress={handleSignUp} disabled={loading}>
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}