import React from 'react';
import Svg, {Path} from 'react-native-svg';

function MenuIcon({height = 24, width = 24, color = 'white'}) {
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
      <Path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z" />
      <Path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z" />
    </Svg>
  );
}

export default MenuIcon;
