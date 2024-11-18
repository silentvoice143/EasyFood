import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

function StarIcon({height = 12, width = 12, color = 'white'}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 8 8" fill="none">
      <Path
        d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z"
        fill="#EBCE10"
      />
    </Svg>
  );
}

export default StarIcon;
