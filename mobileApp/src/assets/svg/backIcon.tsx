import React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackIcon({height = 18, width = 26, color = 'black'}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 18" fill="none">
      <Path
        d="M8.83673 1L1 8.93277L8.83673 17M1.32653 8.93277H25"
        stroke={color}
      />
    </Svg>
  );
}

export default BackIcon;
