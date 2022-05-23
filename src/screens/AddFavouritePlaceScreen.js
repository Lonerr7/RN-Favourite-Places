import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../helpers/styles';

const AddFavouritePlaceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddFavouritePlaceScreen</Text>
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
