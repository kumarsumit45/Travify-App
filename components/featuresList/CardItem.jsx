import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CardItem = ({ item }) => {
  const cardWidth = (Dimensions.get('window').width - 60) / 2.2;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: item.backgroundColor,
          width: cardWidth,
          borderStyle: item.borderStyle,
        },
      ]}
    >
      <Ionicons
        name={item.icon}
        size={32}
        color={item.id === '3' ? '#ff6b6b' : '#333'}
        style={styles.icon}
      />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    borderWidth: 2,
    borderColor: '#dddddde2',
  },
  icon: {
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    lineHeight: 16,
  },
});

export default CardItem;