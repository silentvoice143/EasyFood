import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DashboardIcon({height = 24, width = 24, color = 'white'}) {
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
      <Path d="M4 13h6a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1zm-1 7a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1H4a1 1 0 00-1 1v4zm10 0a1 1 0 001 1h6a1 1 0 001-1v-7a1 1 0 00-1-1h-6a1 1 0 00-1 1v7zm1-10h6a1 1 0 001-1V4a1 1 0 00-1-1h-6a1 1 0 00-1 1v5a1 1 0 001 1z" />
    </Svg>
  );
}

export default DashboardIcon;
