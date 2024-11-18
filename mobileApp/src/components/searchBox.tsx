import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/color';
import tw from 'twrnc';
import SearchIcon from '../assets/svg/searchIcon';

interface searchBoxProps {
  onClick?: any;
}

const SearchBox = ({onClick}: searchBoxProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [input, setInput] = useState<any>('');

  return (
    <View
      style={[
        tw`flex-row items-center justify-center bg-[${
          Colors.lightgrayBG
        }]/30  rounded-full h-12 max-w-[600px] border-[1px] border-[${
          isFocus ? Colors.orange : Colors.lightBorder
        }]/75`,
      ]}>
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        style={[tw`w-full text-[${Colors.secondaryText}] px-4 pr-12`]}
        value={input}
        onChangeText={text => {
          setInput(text);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          onClick(input);
        }}
        style={tw`${'h-[32px] w-[32px]'} bg-[${
          Colors.orange
        }] rounded-full flex-row items-center justify-center absolute right-2`}>
        <SearchIcon height={18} width={18} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;
