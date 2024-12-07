import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/home';
import CustomerRoute from './customerRoute';
import VendorRoute from './vendorRoute';
import tw from 'twrnc';
import {useAppSelector} from '../hooks/reduxHooks';
import MainLoader from '../components/mainLoader';

const MainRoute = () => {
  const loading = useAppSelector(state => state.loader.loading);
  const [isLoading, setISLoading] = useState(loading);
  console.log(isLoading);

  const linking = {
    prefixes: ['https://easyfood.com'], // List of URI schemes your app should handle
    config: {
      screens: {
        customerRoute: 'username1', // Maps 'yourapp://target' to the TargetPage screen
      },
    },
  };
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    setISLoading(loading);
  }, [loading]);
  return (
    <View style={tw`flex-1`}>
      {isLoading && <MainLoader />}
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
    </View>
  );
};

export default MainRoute;
