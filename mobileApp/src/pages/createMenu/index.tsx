import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {Colors} from '../../constants/color';
import {textStyle} from '../../constants/textStyle';
import CloseIcon from '../../assets/svg/closeIcon';
import Button from '../../components/button';

const CrateMenu = ({onClose = () => {}}) => {
  const [isFocus, setIsFocus] = useState({name: false});
  return (
    <View
      style={tw`h-full flex-1 w-full absolute top-0 left-0 z-50 bg-[${Colors.grayshadeE9}]`}>
      <View
        style={tw`px-4 flex-row items-center justify-between py-4 bg-[${Colors.white}]`}>
        <Text
          style={[textStyle.fs_20_700, {color: Colors.darkGray}, tw`w-[50%]`]}>
          Create Item
        </Text>
        <TouchableOpacity onPress={onClose} style={tw``}>
          <CloseIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={tw`px-4 flex-1 flex-col gap-2 justify-center bg-[${Colors.white}] rounded-lg`}>
        <View style={tw`items-center`}>
          <TouchableOpacity>
            <Image source={require('../../assets/img/pizza.png')} />
          </TouchableOpacity>
        </View>
        <Text style={[textStyle.fs_20_400, tw`mb-4`]}>Details</Text>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Food Name *
          </Text>
          <TextInput
            onFocus={() => setIsFocus({...isFocus, name: true})}
            onBlur={() => setIsFocus({...isFocus, name: false})}
            placeholder="Enter Food Name"
            style={tw`border-[${
              isFocus.name ? Colors.orange : Colors.lightBorder
            }]/75 border-[1px] rounded-lg px-4`}
          />
        </View>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Price *
          </Text>
          <TextInput
            onFocus={() => setIsFocus({...isFocus, name: true})}
            onBlur={() => setIsFocus({...isFocus, name: false})}
            placeholder="Price"
            style={tw`border-[${
              isFocus.name ? Colors.orange : Colors.lightBorder
            }]/75 border-[1px] rounded-lg px-4`}
          />
        </View>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Discounted Price *
          </Text>
          <TextInput
            onFocus={() => setIsFocus({...isFocus, name: true})}
            onBlur={() => setIsFocus({...isFocus, name: false})}
            placeholder="Enter Discounted Price"
            style={tw`border-[${
              isFocus.name ? Colors.orange : Colors.lightBorder
            }]/75 border-[1px] rounded-lg px-4`}
          />
        </View>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Rating *
          </Text>
          <TextInput
            onFocus={() => setIsFocus({...isFocus, name: true})}
            onBlur={() => setIsFocus({...isFocus, name: false})}
            placeholder="Enter Rating 1 to 5"
            style={tw`border-[${
              isFocus.name ? Colors.orange : Colors.lightBorder
            }]/75 border-[1px] rounded-lg px-4`}
          />
        </View>
      </ScrollView>
      <View style={tw`mt-4 py-6 bg-[${Colors.white}] px-4 rounded-t-2xl`}>
        <Button
          onClick={() => {}}
          wfull
          txtStyle={textStyle.fs_20_700}
          text={'Save'}
        />
      </View>
    </View>
  );
};

export default CrateMenu;
