import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import {Colors} from '../constants/color';
import {textStyle} from '../constants/textStyle';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const MainLoader = () => {
  const size = 100;
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{scale: scale.value}],
      borderRadius: size / 2,
    };
  }, []);

  useEffect(() => {
    opacity.value = withRepeat(withSpring(0.5), 1000, true);
    scale.value = withRepeat(withSpring(1.5), 1000, true);
  }, []);
  return (
    <View
      style={tw`absolute top-0 left-0 z-50 items-center justify-center w-full h-full bg-white`}>
      <Animated.View
        style={[
          tw`w-[${size}px] h-[${size}px] bg-[${Colors.orange}] justify-center items-center rounded-full`,
          animatedStyle,
        ]}>
        <Text style={[textStyle.fs_20_700, tw`text-[${Colors.white}] `]}>
          EasyFood
        </Text>
      </Animated.View>
    </View>
  );
};

export default MainLoader;
