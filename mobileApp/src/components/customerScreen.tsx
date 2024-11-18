import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import OrderReceived from '../pages/orders';
import Menu from '../pages/menu';
import DashBoard from '../pages/dashboard';
import Header from './header';
import MyOrder from '../pages/myOrder';
import Navbar1 from './Navbar1';

const CustomerScreenRenderer = () => {
  const isVendor = false;
  const [currentScreen, setCurrentScreen] = useState('Menu');

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const renderScreen = () => {
    switch (currentScreen) {
      case 'MyOrders':
        return <MyOrder />;
      case 'Menu':
        return <Menu isVendor={isVendor} />;

      default:
        return <Menu />;
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header screen={currentScreen} />
      <View style={{flex: 1}}>{renderScreen()}</View>
      {!keyboardVisible && (
        <Navbar1
          screen={currentScreen}
          isVendor={isVendor}
          setScreen={setCurrentScreen}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default CustomerScreenRenderer;
