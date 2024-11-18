import {View, Text, Alert} from 'react-native';
import React, {useRef} from 'react';
import {Colors} from '../../constants/color';
import QRCode from 'react-native-qrcode-svg';
import {textStyle} from '../../constants/textStyle';
import tw from 'twrnc';
import {captureRef} from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Button from '../../components/button';

const QrCode = () => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
      }}>
      <Text
        style={[textStyle.fs_64_700, tw`text-[white] text-center mb-[64px]`]}>
        EasyFood
      </Text>
      <View style={tw`p-4 bg-[${Colors.white}] mb-2`}>
        <QRCode
          value={'https://easyfood.com/username1'}
          size={250}
          color="black"
          backgroundColor="white"
          // getRef={getRef}
        />
      </View>
      <Text style={[textStyle.fs_20_400, tw`text-[white] text-center mb-20`]}>
        Scan the QR Code to see the menu and make your order
      </Text>
      <Text
        style={[
          textStyle.fs_12_500,
          tw`text-[${Colors.primaryText}] text-center mb-[64px]`,
        ]}>
        EasyFood
      </Text>
    </View>
  );
};

export default QrCode;
