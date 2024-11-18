import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BracketIcon = ({height = 35, width = 268, color = '#E68702'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path d="M0 2H268M266 0V35M2 0L2 35" stroke={color} strokeWidth="4" />
    </Svg>
  );
};

export default BracketIcon;
