import {View, Text} from 'react-native';
import React from 'react';
import {textStyle} from '../constants/textStyle';
import tw from 'twrnc';
import {Colors} from '../constants/color';

const OrderCard = () => {
  return (
    <View
      style={tw`bg-[${Colors.lightShade}]/50 rounded-lg p-4 gap-2 relative border-[1px] border-[${Colors.lightBorder}]/30`}>
      <Text style={[textStyle.fs_20_400, {color: Colors.darkGray}]}>
        Order ID:
      </Text>
      <View
        style={tw`bg-[${Colors.lightGray}] flex-row w-[50%] max-w-[300px] justify-center rounded-lg py-1 px-2`}>
        <Text style={[textStyle.fs_16_500, {color: Colors.white}]}>
          Axxxxxx12345677
        </Text>
      </View>
      <View style={[tw`gap-2`, {flexDirection: 'row'}]}>
        <View style={tw`flex-1`}>
          <Text style={[textStyle.fs_16_500]}>Payment Status:</Text>
        </View>
        <View
          style={tw`bg-[${Colors.lightGreen}] w-[80px] rounded-md items-center border-[1px] border-[${Colors.darkGreen}]`}>
          <Text style={[textStyle.fs_16_500, {color: Colors.darkGray}]}>
            Paid
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
