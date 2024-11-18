import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/color';
import tw from 'twrnc';
import {textStyle} from '../../constants/textStyle';

const DashBoard = ({navigation}: any) => {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
      }}>
      <View style={tw`flex-row my-4`}>
        <Image source={require('../../assets/img/pizza.png')} />
        <TouchableOpacity style={tw`items-end justify-start flex-1`}>
          <View style={tw`w-8 h-8 bg-[${Colors.orange}] rounded-full`}></View>
        </TouchableOpacity>
      </View>
      <View style={tw`w-full h-[1px] items-center my-2`}>
        <View style={tw`w-[90%] h-[1px] bg-[${Colors.gray52}]`}></View>
      </View>
      <View style={tw`gap-4`}>
        <View>
          <Text style={[textStyle.fs_14_700, {color: Colors.secondaryText}]}>
            Company Name
          </Text>
          <Text style={[textStyle.fs_16_500, {color: Colors.orange}]}>
            EasyFood
          </Text>
        </View>
        <View>
          <Text style={[textStyle.fs_14_700, {color: Colors.secondaryText}]}>
            Company Owner
          </Text>
          <Text style={[textStyle.fs_16_500, {color: Colors.orange}]}>
            Satyam
          </Text>
        </View>
        <View>
          <Text style={[textStyle.fs_14_700, {color: Colors.secondaryText}]}>
            Company Email
          </Text>
          <Text style={[textStyle.fs_16_500, {color: Colors.orange}]}>
            satyam@gmail.com
          </Text>
        </View>
        <View>
          <Text style={[textStyle.fs_14_700, {color: Colors.secondaryText}]}>
            Company Address
          </Text>
          <Text style={[textStyle.fs_16_500, {color: Colors.orange}]}>
            XYZ road , XYZ lane 206
          </Text>
        </View>
        <View>
          <Text style={[textStyle.fs_14_700, {color: Colors.secondaryText}]}>
            Contact
          </Text>
          <Text style={[textStyle.fs_16_500, {color: Colors.orange}]}>
            +91-1234567891
          </Text>
        </View>
      </View>
      <View style={tw`w-full h-[1px] items-center my-2`}>
        <View style={tw`w-[90%] h-[1px] bg-[${Colors.gray52}]`}></View>
      </View>
      <View style={tw`items-center justify-end flex-1 py-8`}>
        <Text
          style={[
            textStyle.fs_12_500,
            {color: Colors.orange, textAlign: 'center'},
          ]}>
          EasyFood
        </Text>
      </View>
    </View>
  );
};

export default DashBoard;
