import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Vendor = () => {
  return <Text>hello</Text>;
};

const VendorRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="vendor" component={Vendor} />
    </Stack.Navigator>
  );
};

export default VendorRoute;
