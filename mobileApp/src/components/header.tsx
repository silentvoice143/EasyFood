import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import BackIcon from '../assets/svg/backIcon';
import {textStyle} from '../constants/textStyle';
import {Colors} from '../constants/color';
import SearchIcon from '../assets/svg/searchIcon';
import Button from './button';
import CrateMenu from '../pages/createMenu';
import QRCodeLogoSvg from '../assets/svg/qrcode';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {setMenuModaltoggle} from '../store/reducer/menu';

interface headerProps {
  screen?: string;
  setIsOpen?: any;
  navigation?: any;
  setType?: any;
}

const Header = ({screen = '', setIsOpen, navigation, setType}: headerProps) => {
  const dispatch = useAppDispatch();
  const [isFocus, setIsFocus] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const isVendor = useAppSelector(state => state.role.isVendor);

  return (
    <View
      style={tw`flex-row items-center gap-4 px-4 h-14 border-b-[1px] border-[${Colors.lighterGray}] justify-between bg-[${Colors.white}]`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('vendorRoute', {screen: 'profile'})}
        style={tw`flex-row items-center gap-4 h-9 w-9 border-[1px] justify-center border-[${Colors.orange}] rounded-full`}>
        <Text style={textStyle.fs_16_500}>SV</Text>
      </TouchableOpacity>
      <View
        style={tw`relative flex-row items-center justify-between gap-4 ${
          isClicked ? 'flex-1 max-w-[400px] ' : ''
        }`}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('vendorRoute', {screen: 'qrCode'})
          }>
          <QRCodeLogoSvg />
        </TouchableOpacity>
        {isVendor && screen === 'Menu' && (
          <Button
            onClick={() => {
              dispatch(setMenuModaltoggle({type: 'create', id: ''}));
            }}
            text="Add"
            width={80}
          />
        )}
        {/* {isVendor && screen === 'Profile' && (
          <Button onClick={() => {}} text="Logout" width={80} />
        )} */}
      </View>
    </View>
  );
};

export default Header;
