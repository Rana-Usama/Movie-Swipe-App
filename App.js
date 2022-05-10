import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import Room1Screen from './app/screens/Room1Screen';
import Room2Screen from './app/screens/Room2Screen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Room2Screen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Room1Screen" component={Room1Screen} />
        <Stack.Screen name="Room2Screen" component={Room2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


