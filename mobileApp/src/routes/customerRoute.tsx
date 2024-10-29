import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Customer = () => {
  return <Text>Customer</Text>;
};
const CustomerRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="customer" component={Customer} />
    </Stack.Navigator>
  );
};

export default CustomerRoute;
