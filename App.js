import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritePlacesScreen from './src/screens/FavouritePlacesScreen';
import { Colors } from './src/helpers/styles';
import AddFavouritePlaceScreen from './src/screens/AddFavouritePlaceScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import IconButton from './src/components/common/IconButton';

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
              options={({ navigation }) => ({
                headerTintColor: 'black',
                title: 'Your Favourite Places',
                headerRight: ({ tintColor }) => (
                  <IconButton
                    icon="add"
                    color={tintColor}
                    size={24}
                    onPress={() => navigation.navigate('Add Favourite Place')}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="Add Favourite Place"
              component={AddFavouritePlaceScreen}
              options={{
                headerTintColor: 'black',
                title: 'Add A New Place',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
