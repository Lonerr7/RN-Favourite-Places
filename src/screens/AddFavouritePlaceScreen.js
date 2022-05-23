import { View, StyleSheet } from 'react-native';
import PlaceForm from '../components/Places/PlaceForm';
import { Colors } from '../helpers/styles';

const AddFavouritePlaceScreen = () => {
  return (
    <View style={styles.container}>
      <PlaceForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray700,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
});

export default AddFavouritePlaceScreen;
