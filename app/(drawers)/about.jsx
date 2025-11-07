import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import COLORS from "../../constants/colors";

const AboutScreen = () => {
  const router = useRouter();

  const features = [
    {
      icon: "shield-checkmark",
      title: "Secure Booking",
      description: "100% secure payment system",
    },
    {
      icon: "pricetag",
      title: "Best Prices",
      description: "Zero commission on bookings",
    },
    {
      icon: "people",
      title: "Trusted by 4,500+",
      description: "Verified hoteliers",
    },
    {
      icon: "star",
      title: "98% Satisfaction",
      description: "Happy travelers",
    },
  ];

  const socialLinks = [
    { icon: "logo-facebook", name: "Facebook" },
    { icon: "logo-twitter", name: "Twitter" },
    { icon: "logo-instagram", name: "Instagram" },
    { icon: "logo-linkedin", name: "LinkedIn" },
  ];

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
        <Text style={styles.headerTitle}>About Us</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="business" size={60} color={COLORS.button} />
          </View>
          <Text style={styles.appName}>Travifai</Text>
          <Text style={styles.tagline}>Discover places you love</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Who We Are</Text>
          <Text style={styles.description}>
            Travifai is a commission-free travel booking platform that connects
            travelers directly with hoteliers. We believe in fair pricing and
            transparent bookings, ensuring the best deals for both travelers and
            accommodation providers.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose Us</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureCard}>
                <View style={styles.featureIcon}>
                  <Ionicons name={feature.icon} size={28} color={COLORS.button} />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>
                  {feature.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Mission */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.description}>
            To revolutionize travel bookings by eliminating unnecessary
            commissions and creating a direct, transparent connection between
            travelers and accommodation providers worldwide.
          </Text>
        </View>

        {/* Social Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect With Us</Text>
          <View style={styles.socialContainer}>
            {socialLinks.map((social, index) => (
              <TouchableOpacity key={index} style={styles.socialButton}>
                <Ionicons name={social.icon} size={28} color={COLORS.primary} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <View style={styles.contactItem}>
            <Ionicons name="mail" size={20} color={COLORS.primary} />
            <Text style={styles.contactText}>support@travifai.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={20} color={COLORS.primary} />
            <Text style={styles.contactText}>+91 1800-123-4567</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="location" size={20} color={COLORS.primary} />
            <Text style={styles.contactText}>
              Mumbai, Maharashtra, India
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.copyright}>
            © 2024 Travifai. All rights reserved.
          </Text>
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
  logoSection: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: COLORS.white,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.inputBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  appName: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  version: {
    fontSize: 14,
    color: COLORS.placeholderText,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  featureCard: {
    width: "48%",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.inputBackground,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 4,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  contactText: {
    fontSize: 15,
    color: COLORS.textDark,
    marginLeft: 16,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  copyright: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },
});

export default AboutScreen;
