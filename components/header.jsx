import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DrawerToggle from "../components/DrawerToggle"


export default function HeaderComponent({ showBadge = true, showToggleMenu =false }) {
  return (
    <View style={styles.container}>
      {/* Left Section - Logo */}
      <View style={styles.leftSection}>
        {
          showToggleMenu && (<DrawerToggle/>)
        }

        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Image source={require("../assets/images/Tlogo.jpg")} style={styles.logo}/>
          </View>
        </View>
        <Text style={styles.brandName}>Travifai</Text>
      </View>

      {/* Right Section - Badge */}
      {showBadge && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeTitle}>ATAL</Text>
          <Text style={styles.badgeSubtitle}>INCUBATION</Text>
          <Text style={styles.badgeSubtitle}>CENTRE - BIMTECH</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#E8D5F2', // Light lavender
    borderBottomWidth: 1,
    borderBottomColor: '#DCC4E8',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoContainer: {
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1.2,
    borderColor: '#2D7A3E', // Dark green
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 20,
  },
  logo:{
    height:40,
    width:40,
    borderRadius:40
  },
  logoIconText: {
    fontSize: 20,
  },
  brandName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: 0.3,
  },
  badgeContainer: {
    backgroundColor: '#1E5A8E', // Dark blue
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFD700', // Gold/yellow
    letterSpacing: 1,
  },
  badgeSubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFD700',
    letterSpacing: 0.5,
    lineHeight: 12,
  },
});