import { View, Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate(`Add Favourite Place`);
  };

  return (
    <View>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => (pressed ? styles.pressedStyle : '')}
        android_ripple={{ color: 'grey' }}
      >
        <Ionicons name="add" size={26} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.2,
  },
});

export default AddButton;
