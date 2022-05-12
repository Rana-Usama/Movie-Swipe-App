import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RFPercentage } from 'react-native-responsive-fontsize';

//screens
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import Room1Screen from './app/screens/Room1Screen';
import Room2Screen from './app/screens/Room2Screen';
import LikedMoviesScreen from './app/screens/LikedMoviesScreen';
import OtherPersonMoviesScreen from './app/screens/OtherPersonsMoviesScreeen';
import SwipeScreen from './app/screens/SwipeScreen';
import Swipe1Screen from './app/screens/Swipe1Screen';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  const HomeDrawer = () => {
    return <Drawer.Navigator screenOptions={{ drawerContentStyle: { marginVertical: RFPercentage(0.2) }, drawerActiveBackgroundColor: Colors.secondary, drawerLabelStyle: { fontSize: RFPercentage(2.2) }, drawerItemStyle: { width: '94%' }, drawerActiveTintColor: Colors.darkGrey2, headerShown: false, drawerPosition: 'left' }} activeBackgroundColor={Colors.primary} initialRouteName="HomeScreen" overlayColor="transparent" edgeWidth={100} drawerStyle={{ width: "75%" }}  >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Swipe" component={Room1Screen} />
      <Drawer.Screen name="Rooms" component={Room2Screen} />
      <Drawer.Screen name="LikedMoviesScreen" component={LikedMoviesScreen} />
      <Drawer.Screen name="OtherPersonMoviesScreen" component={OtherPersonMoviesScreen} />
      <Drawer.Screen name="SwipeScreen" component={SwipeScreen} />
      <Drawer.Screen name="Swipe1Screen" component={Swipe1Screen} />
    </Drawer.Navigator>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// Happy Coding :)


