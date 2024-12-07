import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/color';
import tw from 'twrnc';
import {textStyle} from '../../constants/textStyle';
import Button from '../../components/button';

const DashBoard = ({navigation}: any) => {
  return (
    <View style={tw`flex-1`}>
      <ScrollView
        nestedScrollEnabled
        contentContainerStyle={{
          backgroundColor: Colors.secondaryBG,
          paddingHorizontal: 16,
          paddingVertical: 10,
          display: 'flex',
          gap: 20,
        }}>
        <View
          style={tw`flex flex-row items-center gap-4 border-[1px] px-[16px] py-[12px] rounded-lg bg-[${Colors.white}] border-[${Colors.gray_25}]/50`}>
          <View
            style={tw`w-[118px] h-[118px] bg-[${Colors.orange}] rounded-lg`}></View>
          <View style={tw`gap-4`}>
            <Text style={[textStyle.fs_24_400]}>Satyam Kumar</Text>
            <Button text="Qr Code" />
          </View>
        </View>
        <View
          style={tw`flex gap-4 border-[1px] px-[16px] py-[12px] rounded-lg bg-[${Colors.white}] border-[${Colors.gray_25}]/50`}>
          <Text style={[textStyle.fs_16_500]}>Sales Overview</Text>
          <View style={tw`flex-row gap-4`}>
            <View
              style={tw`flex-1 h-[100px] bg-[${Colors.gray52}]/30 rounded-lg px-3 py-2 justify-between`}>
              <Text
                style={[textStyle.fs_14_400, tw`text-[${Colors.lightGray}]`]}>
                This Year
              </Text>
              <Text
                style={[textStyle.fs_24_400, tw`text-[${Colors.darkGreen}]`]}>
                ₹ 2345
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.darkGreen}]`]}>
                Inc by 20% compared to last year
              </Text>
            </View>
            <View
              style={tw`flex-1 h-[100px] bg-[${Colors.gray52}]/30 rounded-lg px-3 py-2 justify-between`}>
              <Text
                style={[textStyle.fs_14_400, tw`text-[${Colors.lightGray}]`]}>
                This Week
              </Text>
              <Text
                style={[textStyle.fs_24_400, tw`text-[${Colors.darkGreen}]`]}>
                ₹ 2345
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.darkGreen}]`]}>
                Inc by 20% compared to last year
              </Text>
            </View>
          </View>
        </View>
        <View
          style={tw`flex gap-4 border-[1px] px-[16px] py-[12px] rounded-lg bg-[${Colors.white}] border-[${Colors.gray_25}]/50 `}>
          <Text style={[textStyle.fs_16_500]}>Top-selling Items</Text>
          <View style={tw`w-full gap-4`}>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <View style={tw`w-5 h-5 bg-red-500`}></View>
              <Text
                style={[textStyle.fs_16_400, tw`text-[${Colors.lightGray}]`]}>
                Masala Dosa
              </Text>
            </View>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <View style={tw`w-5 h-5 bg-red-500`}></View>
              <Text
                style={[textStyle.fs_16_400, tw`text-[${Colors.lightGray}]`]}>
                Masala Dosa
              </Text>
            </View>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <View style={tw`w-5 h-5 bg-red-500`}></View>
              <Text
                style={[textStyle.fs_16_400, tw`text-[${Colors.lightGray}]`]}>
                Masala Dosa
              </Text>
            </View>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <View style={tw`w-5 h-5 bg-red-500`}></View>
              <Text
                style={[textStyle.fs_16_400, tw`text-[${Colors.lightGray}]`]}>
                Masala Dosa
              </Text>
            </View>
          </View>
        </View>
        <View
          style={tw`flex gap-4 border-[1px] px-[16px] py-[12px] rounded-lg bg-[${Colors.white}] border-[${Colors.gray_25}]/50`}>
          <Text style={[textStyle.fs_16_500]}>Customer Counts</Text>
          <View style={tw`flex-row gap-4`}>
            <View
              style={tw`flex-1 h-[100px] bg-[${Colors.gray52}]/30 rounded-lg px-3 py-2 justify-between`}>
              <Text
                style={[textStyle.fs_14_400, tw`text-[${Colors.lightGray}]`]}>
                This Year
              </Text>
              <Text
                style={[textStyle.fs_24_400, tw`text-[${Colors.darkGreen}]`]}>
                ₹ 2345
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.darkGreen}]`]}>
                Inc by 20% compared to last year
              </Text>
            </View>
            <View
              style={tw`flex-1 h-[100px] bg-[${Colors.gray52}]/30 rounded-lg px-3 py-2 justify-between`}>
              <Text
                style={[textStyle.fs_14_400, tw`text-[${Colors.lightGray}]`]}>
                This Week
              </Text>
              <Text
                style={[textStyle.fs_24_400, tw`text-[${Colors.darkGreen}]`]}>
                ₹ 2345
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.darkGreen}]`]}>
                Inc by 20% compared to last year
              </Text>
            </View>
          </View>
        </View>
        <View
          style={tw`flex gap-4 border-[1px] px-[16px] py-[12px] rounded-lg bg-[${Colors.white}] border-[${Colors.gray_25}]/50 `}>
          <Text style={[textStyle.fs_16_500]}>Feedback and Reviews</Text>
          <View style={tw`w-full gap-4`}>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <Text
                style={[
                  textStyle.fs_14_400,
                  tw`text-[${Colors.lightGray}] flex-1`,
                ]}>
                Masala Dosa
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.lightGray}]`]}>
                1hr
              </Text>
            </View>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <Text
                style={[
                  textStyle.fs_14_400,
                  tw`text-[${Colors.lightGray}] flex-1`,
                ]}>
                Masala Dosa
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.lightGray}]`]}>
                1hr
              </Text>
            </View>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <Text
                style={[
                  textStyle.fs_14_400,
                  tw`text-[${Colors.lightGray}] flex-1`,
                ]}>
                Masala Dosa
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.lightGray}]`]}>
                1hr
              </Text>
            </View>
            <View
              style={tw`h-[46px] w-full rounded-lg items-center gap-4 px-4 flex-row border-[1px] border-[${Colors.lightBorder}]/50 bg-[${Colors.gray52}]/30`}>
              <Text
                style={[
                  textStyle.fs_14_400,
                  tw`text-[${Colors.lightGray}] flex-1`,
                ]}>
                Masala Dosa
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.lightGray}]`]}>
                1hr
              </Text>
            </View>
          </View>
        </View>
        <View
          style={tw`flex gap-4 border-[1px] px-[16px] py-[12px] rounded-lg bg-[${Colors.white}] border-[${Colors.gray_25}]/50`}>
          <Text style={[textStyle.fs_16_500]}>Data and Analysis</Text>
          <View style={tw`flex-row gap-4`}>
            <View
              style={tw`flex-1 h-[100px] bg-[${Colors.gray52}]/30 rounded-lg px-3 py-2 justify-between`}>
              <Text
                style={[textStyle.fs_14_400, tw`text-[${Colors.lightGray}]`]}>
                This Year
              </Text>
              <Text
                style={[textStyle.fs_24_400, tw`text-[${Colors.darkGreen}]`]}>
                ₹ 2345
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.darkGreen}]`]}>
                Inc by 20% compared to last year
              </Text>
            </View>
            <View
              style={tw`flex-1 h-[100px] bg-[${Colors.gray52}]/30 rounded-lg px-3 py-2 justify-between`}>
              <Text
                style={[textStyle.fs_14_400, tw`text-[${Colors.lightGray}]`]}>
                This Week
              </Text>
              <Text
                style={[textStyle.fs_24_400, tw`text-[${Colors.darkGreen}]`]}>
                ₹ 2345
              </Text>
              <Text
                style={[textStyle.fs_10_400, tw`text-[${Colors.darkGreen}]`]}>
                Inc by 20% compared to last year
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashBoard;
