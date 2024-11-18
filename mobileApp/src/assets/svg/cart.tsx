import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconBxCartAlt({height = 24, width = 24, color = 'white'}) {
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
      <Path d="M21 4H2v2h2.3l3.28 9a3 3 0 002.82 2H19v-2h-8.6a1 1 0 01-.94-.66L9 13h9.28a2 2 0 001.92-1.45L22 5.27A1 1 0 0021.27 4 .84.84 0 0021 4zm-2.75 7h-10L6.43 6h13.24z" />
      <Path d="M12 19.5 A1.5 1.5 0 0 1 10.5 21 A1.5 1.5 0 0 1 9 19.5 A1.5 1.5 0 0 1 12 19.5 z" />
      <Path d="M18 19.5 A1.5 1.5 0 0 1 16.5 21 A1.5 1.5 0 0 1 15 19.5 A1.5 1.5 0 0 1 18 19.5 z" />
    </Svg>
  );
}

export default IconBxCartAlt;
