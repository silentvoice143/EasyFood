import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Colors} from '../constants/color';
import DashboardIcon from '../assets/svg/dashboardIcon';
import ProfileIcon from '../assets/svg/profile';
import MenuIcon from '../assets/svg/menuIcon';
import IconBxCartAlt from '../assets/svg/cart';
import {textStyle} from '../constants/textStyle';
interface NavbarProps {
  setScreen: any;
  isVendor: boolean;
  screen: string;
}

const Navbar1 = ({setScreen, screen, isVendor = false}: NavbarProps) => {
  return (
    <View
      style={tw`h-[80px] w-full bg-[${Colors.white}] flex-row justify-between items-center border-t-[1px] border-[${Colors.gray_25}]`}>
      <TouchableOpacity
        onPress={() => setScreen('Menu')}
        style={tw`relative items-center justify-center flex-1 h-full`}>
        {screen === 'Menu' && (
          <View
            style={tw`w-[100px] h-1 bg-[${Colors.orange}] absolute top-0 rounded-b-md`}></View>
        )}
        <MenuIcon color={Colors.black} height={24} width={24} />
        <Text style={[textStyle.fs_14_700]}>Menu</Text>
      </TouchableOpacity>
      <View style={tw`h-8 w-[1px] bg-[${Colors.gray52}]`}></View>
      <TouchableOpacity
        onPress={() => (isVendor ? setScreen('Orders') : setScreen('MyOrders'))}
        style={tw`relative items-center justify-center flex-1 h-full`}>
        {(screen === 'Orders' || screen === 'MyOrders') && (
          <View
            style={tw`w-[100px] h-1 bg-[${Colors.orange}] absolute top-0 rounded-b-md`}></View>
        )}
        <IconBxCartAlt color={Colors.black} height={24} width={24} />
        <Text style={[textStyle.fs_14_700]}>Orders</Text>
      </TouchableOpacity>
      {isVendor && <View style={tw`h-8 w-[1px] bg-[${Colors.gray52}] `}></View>}

      {isVendor && (
        <TouchableOpacity
          onPress={() => setScreen('Dashboard')}
          style={tw`relative items-center justify-center flex-1 h-full`}>
          {screen === 'Dashboard' && (
            <View
              style={tw`w-[100px] h-1 bg-[${Colors.orange}] absolute top-0 rounded-b-md`}></View>
          )}
          <DashboardIcon color={Colors.black} height={24} width={24} />
          <Text style={[textStyle.fs_14_700]}>Dashboard</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Navbar1;
