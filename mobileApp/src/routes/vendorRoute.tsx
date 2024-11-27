import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/login';
import Signup from '../pages/signup';
import QrCode from '../pages/qRCode';
import OrderReceived from '../pages/orders';
import DashBoard from '../pages/dashboard';
import CrateMenu from '../pages/createMenu';
import OrderDetail from '../pages/orderDetail';
import ScreenRenderer from '../components/screenRenderer';
import Profile from '../pages/profile';
import ProtectedRoute from './ProtectedRoute';
const Vendor = () => {
  return <Text>hello</Text>;
};

const VendorRoute = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="vendor" component={Vendor} />
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="signup"
        component={Signup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="qrCode"
        component={QrCode}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="profile"
        component={Profile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="orderdetail"
        component={OrderDetail}
      />
      <Stack.Screen options={{headerShown: false}} name="Screen">
        {(props: any) => (
          <ProtectedRoute component={ScreenRenderer} {...props} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default VendorRoute;
