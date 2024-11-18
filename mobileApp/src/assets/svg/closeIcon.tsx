import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../constants/color';

function CloseIcon({height = 24, width = 24, color = Colors.darkGray}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 6L6 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloseIcon;
