import { FlatList,Text, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return <Text style={styles.fallbackText}>No places found</Text>
  }

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
  fallbackText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  }
});

export default PlacesList;
