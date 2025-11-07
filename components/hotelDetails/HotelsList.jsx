import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

import HotelCard from './HotelCard';
import COLORS from '../../constants/colors';

const HOTELS_DATA = [
  {
    id: '1',
    name: 'Utsav palace',
    image: require('../../assets/images/hotel1.jpg'),
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
    image: require('../../assets/images/hotel2.jpg'),
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
    image: require('../../assets/images/hotel3.jpg'),
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
    image: require('../../assets/images/hotel4.jpg'),
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
    image: require('../../assets/images/hotel1.jpg'),
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
    image: require('../../assets/images/hotel2.jpg'),
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
    image: require('../../assets/images/hotel3.jpg'),
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
    image: require('../../assets/images/hotel4.jpg'),
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
    image: require('../../assets/images/hotel1.jpg'),
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
    image: require('../../assets/images/hotel1.jpg'),
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
    image: require("../../assets/images/hotel3.jpg"),
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
    image: require('../../assets/images/hotel4.jpg'),
    location: 'Ranikhet',
    discountPercent: '21% less',
    commissioning_price: '₹4700/P.N',
    commissionFreePrice: '₹3713/P.N',
    reviews: '289 Reviews',
    wishlist: false,
  },
];

export default function HotelsList() {
  const router = useRouter();

  const handleChat = (hotel) => {
    router.push({
      pathname: '/(drawers)/(tabs)/chat',
      params: {
        hotelName: hotel.name,
        hotelLocation: hotel.location,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContent}>
        {HOTELS_DATA.map((item) => (
          <HotelCard
            key={item.id}
            hotel={item}
            onChat={() => handleChat(item)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.tabBackground,
    marginTop:12,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});