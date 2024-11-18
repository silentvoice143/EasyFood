import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import React from 'react';
import BackIcon from '../../assets/svg/backIcon';
import tw from 'twrnc';
import {Colors} from '../../constants/color';
import {textStyle} from '../../constants/textStyle';
import ProfileIcon from '../../assets/svg/profile';
import AddressIcon from '../../assets/svg/addressIcon';

const Profile = ({navigation}: any) => {
  return (
    <View style={tw`bg-[${Colors.secondaryBG}] flex-1`}>
      <View style={tw`px-4 py-6 `}>
        <TouchableOpacity
          style={tw`w-8`}
          onPress={() => {
            navigation.goBack();
          }}>
          <BackIcon />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-1 gap-2 px-4py-2`}>
        <View
          style={tw`flex-row items-center gap-4 bg-[${Colors.white}] px-4 py-3 rounded-xl border-[1px] border-[${Colors.gray_25}]/50`}>
          <View
            style={tw`relative h-[100px] w-[100px] rounded-full overflow-hidden border-[2px] border-[${Colors.orange}]`}>
            <Image
              style={tw`absolute top-0 w-full h-full`}
              source={require('../../assets/img/homepic.png')}
            />
          </View>
          <Text style={[textStyle.fs_20_700, tw`text-[${Colors.coalBlack}]`]}>
            Satyam
          </Text>
        </View>
        <Pressable
          style={tw`flex-row items-center justify-between gap-4 bg-[${Colors.white}] px-4 py-3 rounded-xl border-[1px] border-[${Colors.gray_25}]/50`}>
          <Text style={[textStyle.fs_20_400, tw`text-[${Colors.coalBlack}]`]}>
            Profile
          </Text>
          <ProfileIcon color={Colors.black} />
        </Pressable>
        <Pressable
          style={tw`flex-row items-center justify-between gap-4 bg-[${Colors.white}] px-4 py-3 rounded-xl border-[1px] border-[${Colors.gray_25}]/50`}>
          <Text style={[textStyle.fs_20_400, tw`text-[${Colors.coalBlack}]`]}>
            Appearance
          </Text>
          <Text style={[textStyle.fs_20_400, tw`text-[${Colors.lightGray}]`]}>
            LIGHT
          </Text>
        </Pressable>
        <Pressable
          style={tw`gap-4 bg-[${Colors.white}] px-4 py-3 rounded-xl border-[1px] border-[${Colors.gray_25}]/50`}>
          <View style={tw`flex-row items-center gap-2`}>
            <AddressIcon color={Colors.orange} />
            <Text style={[textStyle.fs_20_700, tw`text-[${Colors.coalBlack}]`]}>
              Address
            </Text>
          </View>
          <Text style={[textStyle.fs_20_400, tw`text-[${Colors.lightGray}]`]}>
            XYZ Complex, Near XYZ platform, Jharkhand, India
          </Text>
        </Pressable>
        <View
          style={tw` bg-[${Colors.white}] py-3 rounded-xl border-[1px] border-[${Colors.gray_25}]/50`}>
          <View style={tw`flex-row items-center gap-2 mb-2`}>
            <View
              style={tw`h-6 w-2 bg-[${Colors.orange}] rounded-r-full`}></View>
            <Text style={[textStyle.fs_20_700, tw`text-[${Colors.coalBlack}]`]}>
              More
            </Text>
          </View>
          <TouchableOpacity style={tw`px-4 py-2`}>
            <Text style={[textStyle.fs_20_400]}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-4 py-2`}>
            <Text style={[textStyle.fs_20_400]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
