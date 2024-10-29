import {View, Text, TouchableOpacity} from 'react-native';
import React, {Children} from 'react';
import {textStyle} from '../constants/textStyle';

type ButtonProps = {
  onClick?: () => void;
  text?: string;
  textColor?: string;
  pH?: number;
  pV?: number;
  bgColor?: string;
  width?: number;
  wfull?: boolean;
  txtStyle?: any;
  corner?: number;
};

const Button = ({
  onClick = () => {},
  text = 'done',
  textColor = 'white',
  pH = 20,
  pV = 8,
  bgColor = '#E68702',
  width = 100,
  wfull = false,
  txtStyle = textStyle.fs_12_500,
  corner = 8,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        backgroundColor: bgColor,
        paddingHorizontal: pH,
        paddingVertical: pV,
        borderRadius: corner,
        width: wfull ? '100%' : width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={[{color: textColor}, txtStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
