import {View, Text} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon({height = 16, width = 17, color = 'white'}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 17 16" fill="none">
      <Path
        d="M10.3223 9.63611L16 14.2692M11.6766 6.34354C11.6766 9.29469 9.28656 11.6871 6.3383 11.6871C3.39004 11.6871 1 9.29469 1 6.34354C1 3.39238 3.39004 1 6.3383 1C9.28656 1 11.6766 3.39238 11.6766 6.34354Z"
        stroke={color}
        stroke-width="2"
      />
    </Svg>
  );
}

export default SearchIcon;
