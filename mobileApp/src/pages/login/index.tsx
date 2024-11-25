import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, version} from 'react';
import tw from 'twrnc';
import {textStyle} from '../../constants/textStyle';
import {Colors} from '../../constants/color';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, VendorStackParamList} from '../../types';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {login} from '../../store/reducer/auth';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'vendorRoute'
>;

const Login = ({}) => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [isFocus, setIsFocus] = useState({
    email: false,
    password: false,
  });
  const [userData, setUserData] = useState<{email: string; password: string}>({
    email: 'wajilel682@kazvi.com',
    password: 'password123',
  });

  const onLogin = async () => {
    if (!userData.email && !userData.password) {
      Alert.alert('Please fill all feild');
    }

    try {
      console.log(userData);
      const {payload}: any = await dispatch(login(userData));
      if (payload.status === 200) {
        console.log(payload.data.message);
      } else {
        Alert.alert('something is wrong');
      }
    } catch (err: any) {
      Alert.alert('something is wrong');
    }
  };
  return (
    <View style={tw`flex-1 bg-white justify-center px-[10%]`}>
      <Text
        style={[
          textStyle.fs_64_700,
          tw`text-[${Colors.orange}] text-center mb-[64px]`,
        ]}>
        Login
      </Text>
      <View style={tw`gap-5 mb-16`}>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Email
          </Text>
          <TextInput
            value={userData.email}
            onChangeText={text => {
              setUserData({...userData, email: text});
            }}
            onFocus={() => setIsFocus({...isFocus, email: true})}
            onBlur={() => setIsFocus({...isFocus, email: false})}
            placeholder="Enter email"
            style={tw`border-[${
              isFocus.email ? Colors.orange : Colors.lightGray
            }] border-[1px] rounded-lg px-4`}
          />
        </View>
        <View style={tw`mb-4`}>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Password
          </Text>
          <TextInput
            value={userData.password}
            onChangeText={text => setUserData({...userData, password: text})}
            onFocus={() => setIsFocus({...isFocus, password: true})}
            onBlur={() => setIsFocus({...isFocus, password: false})}
            placeholder="Enter password"
            style={tw`border-[${
              isFocus.password ? Colors.orange : Colors.lightGray
            }] border-[1px] rounded-lg px-4 text-[${Colors.secondaryText}]`}
          />
        </View>
        <View>
          <Button
            wfull
            txtStyle={textStyle.fs_20_700}
            text={'Login'}
            onClick={onLogin}
          />
          <Text
            style={[
              textStyle.fs_14_400,
              {color: Colors.primaryText},
              tw`self-center mt-2 text-center`,
            ]}>
            Don't have an account?{' '}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('vendorRoute', {screen: 'signup'})
              }
              style={{padding: 0, margin: 0}}>
              <Text
                style={[
                  textStyle.fs_14_400,
                  {color: Colors.primaryText},
                  tw`underline mb-[-2px]`,
                ]}>
                Create account
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={tw`w-[20%] h-[2px] bg-[${Colors.primaryText}]`}></View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            or
          </Text>
          <View style={tw`w-[20%] h-[2px] bg-[${Colors.primaryText}]`}></View>
        </View>
        <Button
          onClick={() => navigation.navigate('vendorRoute', {screen: 'Screen'})}
          wfull
          txtStyle={textStyle.fs_20_700}
          text={'Login with Google'}
        />
      </View>
      <Text
        style={[
          textStyle.fs_14_400,
          {color: Colors.primaryText},
          tw`self-center mt-2 text-center`,
        ]}>
        Terms & Conditions{' '}
        <TouchableHighlight style={{padding: 0, margin: 0}}>
          <Text
            style={[
              textStyle.fs_14_400,
              {color: Colors.orange},
              tw`underline mb-[-2px]`,
            ]}>
            EasyFood
          </Text>
        </TouchableHighlight>
      </Text>
    </View>
  );
};

export default Login;
