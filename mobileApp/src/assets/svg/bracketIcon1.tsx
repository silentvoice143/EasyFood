import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BracketIcon1 = ({height = 35, width = 268, color = '#E68702'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 268 35" fill="none">
      <Path d="M0 33H268M2 0L2 35M266 0V35" stroke={color} strokeWidth="4" />
    </Svg>
  );
};

export default BracketIcon1;
