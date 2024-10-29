import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import CustomerRoute from './customerRoute';
import VendorRoute from './vendorRoute';

const MainRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="customerRoute" component={CustomerRoute} />
        <Stack.Screen name="vendorRoute" component={VendorRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
