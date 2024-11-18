import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = ({height = 15, width = 15, color = 'white'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path d="M0 7.05882H15M7.5 0V15" stroke="white" stroke-width="2" />
    </Svg>
  );
};

export default PlusIcon;
