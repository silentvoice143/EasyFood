import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import tw from 'twrnc';
import {textStyle} from '../../constants/textStyle';
import Button from '../../components/button';
import {useAppSelector} from '../../hooks/reduxHooks';

const Home = ({navigation}) => {
  const isAuthenticated = useAppSelector(state => state.auth.token);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{name: 'vendorRoute', state: {routes: [{name: 'Screen'}]}}],
      });
    }
  }, [isAuthenticated, navigation]);
  return (
    <View style={[tw`flex-1 bg-white justify-center px-[10%] gap-5`]}>
      <Text
        style={[textStyle.fs_64_700, tw`text-[orange] text-center mb-[28]`]}>
        EasyFood
      </Text>
      <Image
        style={[{height: 264, width: 282, alignSelf: 'center'}]}
        source={require('../../assets/img/homepic.png')}
      />
      <Button
        onClick={() => navigation.navigate('customerRoute', {screen: 'ScanQr'})}
        wfull
        txtStyle={textStyle.fs_20_700}
        text={`I'am a Customer`}
      />
      <Button
        onClick={() => navigation.navigate('vendorRoute', {screen: 'login'})}
        wfull
        txtStyle={textStyle.fs_20_700}
        text={`I'am a Vendor`}
      />
    </View>
  );
};

export default Home;
