import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import CardItem from './CardItem';

const HorizontalCardList = () => {
  const cardData = [
    {
      id: '1',
      title: 'Connect',
      icon: 'chatbubbles',
      backgroundColor: '#ebf4fb',
      borderStyle: 'dashed',
    },
    {
      id: '2',
      title: 'Hotel & Travel\nAgency Alliance',
      icon: 'sunny',
      backgroundColor: '#c9f7ea',
      borderStyle: 'dashed',
    },
    {
      id: '3',
      title: 'LIMITED PERIOD OFFER\nCODE: LOVE15',
      icon: 'gift',
      backgroundColor: '#eccea5',
      borderStyle: 'dashed',
    },
    {
      id: '4',
      title: 'Preference\nMood Board',
      icon: 'chatbubbles',
      backgroundColor: '#eb86c1',
      borderStyle: 'dashed',
    },
    {
      id: '5',
      title: 'Zero Commissions',
      icon: 'sunny',
      backgroundColor: '#b2e2f7',
      borderStyle: 'dashed',
    },
    {
      id: '6',
      title: 'ONE TIME USE PER USER\nCODE: WELCOME25',
      icon: 'gift',
      backgroundColor: '#eed2d7',
      borderStyle: 'dashed',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop:-100,
  },
  listContent: {
    gap: 15,
    paddingRight: 15,
  },
});

export default HorizontalCardList;