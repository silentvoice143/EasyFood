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
import CrateMenu from '../pages/createMenu';
import Navbar1 from './Navbar1';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {VendorStackParamList} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainLoader from './mainLoader';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';

type VendorScreenRouteProp = RouteProp<VendorStackParamList, 'Screen'>;
type ScreenNavigationProp = NativeStackNavigationProp<
  VendorStackParamList,
  'Screen'
>;

const ScreenRenderer = ({}) => {
  const route = useRoute<VendorScreenRouteProp>();
  const navigation = useNavigation<ScreenNavigationProp>();
  const isVendor = true;
  const [currentScreen, setCurrentScreen] = useState(
    route.params?.screen ? route?.params?.screen : 'Menu',
  );
  const [isOpen, setIsOpen] = useState(false);
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
      case 'Orders':
        return <OrderReceived navigation={navigation} />;
      case 'Menu':
        return <Menu isVendor={isVendor} />;
      case 'Dashboard':
        return <DashBoard />;
      default:
        return <Menu />;
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header
        setIsOpen={setIsOpen}
        screen={currentScreen}
        navigation={navigation}
      />
      <View style={{flex: 1}}>{renderScreen()}</View>
      {!keyboardVisible && (
        <Navbar1
          screen={currentScreen}
          isVendor={isVendor}
          setScreen={setCurrentScreen}
        />
      )}
      {isOpen && <CrateMenu onClose={() => setIsOpen(false)} />}
    </KeyboardAvoidingView>
  );
};

export default ScreenRenderer;
