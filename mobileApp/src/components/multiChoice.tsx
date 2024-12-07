import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {textStyle} from '../constants/textStyle';
import tw from 'twrnc';
import {Colors} from '../constants/color';

interface MultiChoiceProps {
  data?: string[];
  selectedItem?: string[];
  setSelectedItem?: any;
  filter?: any;
}

const MultiChoice = ({
  data = [],
  selectedItem,
  setSelectedItem,
  filter,
}: MultiChoiceProps) => {
  const handleSelect = (item: string) => {
    filter(item);
    selectedItem?.includes(item)
      ? setSelectedItem((prev: any) => prev.filter((i: string) => i !== item))
      : setSelectedItem((prev: any) => [...prev, item]);
  };
  return (
    <View style={tw`flex-row flex-wrap gap-4`}>
      {data.map((item: string, idx: number) => (
        <TouchableOpacity
          onPress={() => {
            handleSelect(item);
          }}
          style={tw`w-[80px] items-center justify-center border-[1px] rounded-full ${
            selectedItem?.includes(item)
              ? `bg-[${Colors.orange}]/10`
              : `bg-[${Colors.gray52}]/40`
          } ${
            selectedItem?.includes(item)
              ? `border-[${Colors.orange}]/50`
              : `border-[${Colors.lightBorder}]/50`
          }`}
          key={'list' + idx}>
          <Text
            style={[
              textStyle.fs_14_400,
              tw`items-center justify-center text-center`,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MultiChoice;
