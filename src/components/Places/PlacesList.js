import { FlatList, Text, StyleSheet, View } from 'react-native';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackTextBox}>
        <Text style={styles.fallbackText}>No places found</Text>
      </View>
    );
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
    flex: 1,
  },
  fallBackTextBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default PlacesList;
