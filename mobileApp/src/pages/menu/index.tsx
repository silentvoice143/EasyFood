import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import MenuCard from '../../components/menuCard';
import {textStyle} from '../../constants/textStyle';
import {Colors} from '../../constants/color';
import SearchBox from '../../components/searchBox';

const data = ['Veg', 'Non-veg', 'Egg', 'Paneer'];

const Menu = ({navigation}: any) => {
  const isVendor = true;
  return (
    <View style={tw`bg-[${Colors.white}] pb-32`}>
      <View style={tw`px-4 my-4`}>
        <SearchBox
          onClick={(text: string) => {
            console.log(text);
          }}
        />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={tw`flex-row gap-4 items-center px-4 bg-[${Colors.white}] min-w-[100%] py-4`}>
        {data.map((item, idx) => (
          <TouchableOpacity
            key={`${idx} filter`}
            style={tw`border-[1px] px-4 h-[30px] justify-center rounded-full border-[${Colors.lightGray}]`}>
            <Text style={[textStyle.fs_14_400, {color: Colors.lightGray}]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuCard isVendor={isVendor} />
        <MenuCard isVendor={isVendor} />
        <MenuCard isVendor={isVendor} />
        <MenuCard isVendor={isVendor} />
        <MenuCard isVendor={isVendor} />
        <MenuCard isVendor={isVendor} />
      </ScrollView>
    </View>
  );
};

export default Menu;
