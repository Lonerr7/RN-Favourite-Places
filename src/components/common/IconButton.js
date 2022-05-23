import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressedStyle : '')}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressedStyle: {
    opacity: 0.2,
  },
});

export default IconButton;
