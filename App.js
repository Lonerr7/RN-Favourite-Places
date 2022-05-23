import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritePlacesScreen from './src/screens/FavouritePlacesScreen';
import AddButton from './src/components/common/AddButton';
import { Colors } from './src/helpers/styles';
import AddFavouritePlaceScreen from './src/screens/AddFavouritePlaceScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
            }}
          >
            <Stack.Screen
              name="Favourite Places"
              component={FavouritePlacesScreen}
              options={{
                headerRight: () => <AddButton />,
              }}
            />
            <Stack.Screen
              name="Add Favourite Place"
              component={AddFavouritePlaceScreen}
              options={{
                headerTintColor: 'black',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
