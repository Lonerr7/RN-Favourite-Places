import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import PlacesList from '../components/Places/PlacesList';
import { Colors } from '../helpers/styles';

const FavouritePlacesScreen = () => {
  const favPlaces = useSelector((state) => state.favouritePlaces.favPlaces);

  return (
    <View style={styles.container}>
      <PlacesList places={favPlaces} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray700,
    paddingTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
  },
});

export default FavouritePlacesScreen;
