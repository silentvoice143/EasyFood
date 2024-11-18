import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerScreenRenderer from '../components/customerScreen';
import QRScanner from '../pages/scanQr';

const Customer = () => {
  return <Text>Customer</Text>;
};
const CustomerRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="customer" component={Customer} />
      <Stack.Screen
        options={{headerShown: false}}
        name="CustomerScreen"
        component={CustomerScreenRenderer}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ScanQr"
        component={QRScanner}
      />
    </Stack.Navigator>
  );
};

export default CustomerRoute;
