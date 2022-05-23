import { Pressable, View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../helpers/styles';

const OutlinedButton = ({ onPress, icon, children }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressedStyle] : styles.button
        }
        onPress={onPress}
      >
        <Ionicons
          style={styles.icon}
          name={icon}
          size={18}
          color={Colors.primary100}
        />
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary100,
  },
  pressedStyle: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary100,
  },
});

export default OutlinedButton;
