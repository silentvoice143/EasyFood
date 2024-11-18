import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import CustomerRoute from './customerRoute';
import VendorRoute from './vendorRoute';

const MainRoute = () => {
  const linking = {
    prefixes: ['https://easyfood.com'], // List of URI schemes your app should handle
    config: {
      screens: {
        customerRoute: 'username1', // Maps 'yourapp://target' to the TargetPage screen
      },
    },
  };
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="customerRoute"
          component={CustomerRoute}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="vendorRoute"
          component={VendorRoute}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
