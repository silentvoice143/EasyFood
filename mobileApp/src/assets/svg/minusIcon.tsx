import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MinusIcon = ({height = 2, width = 12, color = 'white'}) => {
  return (
    <Svg width="12" height="2" viewBox="0 0 12 2" fill="none">
      <Path d="M0 1H12" stroke="white" stroke-width="2" />
    </Svg>
  );
};

export default MinusIcon;
