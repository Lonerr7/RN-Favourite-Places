import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../helpers/styles';

const PlaceItem = ({ title, imageUri, address, id }) => {
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.rootContainer, styles.pressedStyle]
          : styles.rootContainer
      }
    >
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    minHeight: 100,
    marginBottom: 20,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.primary500,
    borderRadius: 5,
  },
  pressedStyle: {
    opacity: 0.7,
    backgroundColor: Colors.primary200,
    borderRadius: 5,
  },
  imageBox: {
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: '35%',
    height: 110,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textBox: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    width: '100%',
  },
  title: {
    fontWeight: '700',
    marginBottom: 5,
    maxWidth: '90%',
    fontSize: 18,
  },
  address: {
    maxWidth: '90%',
  },
});

export default PlaceItem;
