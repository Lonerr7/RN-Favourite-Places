import { FlatList, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={places}
      renderItem={({ item }) => (
        <PlaceItem
          address={item.address}
          title={item.title}
          imageUri={item.imageUri}
          id={item.id}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
});

export default PlacesList;
