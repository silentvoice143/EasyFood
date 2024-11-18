import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Colors} from '../constants/color';
import DashboardIcon from '../assets/svg/dashboardIcon';
import ProfileIcon from '../assets/svg/profile';
import MenuIcon from '../assets/svg/menuIcon';
import IconBxCartAlt from '../assets/svg/cart';
interface NavbarProps {
  setScreen: any;
  isVendor: boolean;
}

const Navbar = ({setScreen, isVendor = false}: NavbarProps) => {
  return (
    <View
      style={tw`h-16 w-full bg-[${Colors.orange}] flex-row justify-between`}>
      <TouchableOpacity
        onPress={() => setScreen('Menu')}
        style={tw`items-center justify-center flex-1`}>
        <MenuIcon height={30} width={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (isVendor ? setScreen('Orders') : setScreen('MyOrders'))}
        style={tw`items-center justify-center flex-1`}>
        <IconBxCartAlt height={30} width={30} />
      </TouchableOpacity>
      {isVendor && (
        <TouchableOpacity
          onPress={() => setScreen('Profile')}
          style={tw`items-center justify-center flex-1`}>
          <ProfileIcon height={30} width={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Navbar;
