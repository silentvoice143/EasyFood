import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import tw from 'twrnc';
import {textStyle} from '../../constants/textStyle';
import {Colors} from '../../constants/color';
import Button from '../../components/button';
import BackIcon from '../../assets/svg/backIcon';
import {useDispatch} from 'react-redux';
import {
  sendOtp,
  signupStep1,
  signupStep2,
  signupStep3,
} from '../../store/reducer/auth';
import {useAppDispatch} from '../../hooks/reduxHooks';

const Signup = ({navigation}: any) => {
  const [isFocus, setIsFocus] = useState({
    business_name: false,
    location: false,
    email: false,
    password: false,
  });

  const [dataInput, setDataInput] = useState({
    business_name: '',
    location: '',
    email: '',
    password: '',
  });
  const [userId, setUserId] = useState('');
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const inputs = useRef([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if the current input has a value
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleFocus = index => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  const sendOTP = async () => {
    try {
      const {payload} = await dispatch(sendOtp({userId: userId}));

      if (payload.status === 200) {
        console.log(payload.data);
        Alert.alert('Message', 'Otp sent successfully');
      } else {
        Alert.alert('something is wrong');
      }
    } catch (err) {
      Alert.alert('something is wrong');
    }
  };

  const verifyOtp = async () => {
    try {
      const {payload} = await dispatch(
        signupStep3({userid: userId, otp: otp.join('')}),
      );

      if (payload.status === 200) {
        console.log(payload.data);
        console.log('Message', 'Otp Verified successfully');
        return true;
      } else if (payload.status === 400) {
        Alert.alert('Message', 'Invalid Otp');
      } else {
        Alert.alert('something is wrong');
      }
    } catch (err) {
      Alert.alert('something is wrong');
    }
    return false;
  };

  const stepOne = async () => {
    if (!dataInput.email && !dataInput.password) {
      Alert.alert('Attention!', 'Please fill both email and password fields.');
    } else if (!dataInput.email) {
      Alert.alert('Attention!', 'Please fill the email field.');
    } else if (!dataInput.password) {
      Alert.alert('Attention!', 'Please fill the password field.');
    } else {
      try {
        const {payload} = await dispatch(
          signupStep1({email: dataInput.email, password: dataInput.password}),
        );
        if (payload.status === 200) {
          console.log(payload.data);
          setStep(payload.data.step + 1);
          setUserId(payload.data.userId);
        } else if (payload.status === 400) {
          Alert.alert('Bad Request', 'User Already Exist!');
        } else {
          Alert.alert('something is wrong');
        }
      } catch (err) {
        Alert.alert('something is wrong');
      }
    }
  };
  const stepTwo = async () => {
    if (!dataInput.business_name && !dataInput.location) {
      Alert.alert(
        'Attention!',
        'Please fill both business name and location fields.',
      );
    } else if (!dataInput.business_name) {
      Alert.alert('Attention!', 'Please fill the business name field.');
    } else if (!dataInput.location) {
      Alert.alert('Attention!', 'Please fill the location field.');
    } else {
      try {
        const {payload} = await dispatch(
          signupStep2({
            userId: userId,
            businessName: dataInput.business_name,
            address: dataInput.location,
          }),
        );
        if (payload.status === 200) {
          console.log(payload.data);
          setStep(payload.data.step + 1);
          sendOTP();
        } else {
          Alert.alert('something is wrong');
        }
      } catch (err) {
        Alert.alert('something is wrong');
      }
    }
  };
  const stepThree = async () => {
    const otpVerification: any = await verifyOtp();
    if (otpVerification) {
      console.log('Otp verified');
      navigation.reset({
        index: 0,
        routes: [{name: 'vendorRoute', state: {routes: [{name: 'Screen'}]}}],
      });
    }
    return;
  };

  return (
    <View style={tw`justify-center flex-1 bg-white`}>
      <View
        style={tw`flex-1 bg-white justify-center px-[10%] ${
          step === 1 ? 'py-[76px]' : 'pb-[76px]'
        }`}>
        {step !== 1 && (
          <View style={tw`mb-[30px] h-[50px] justify-center`}>
            <TouchableOpacity
              onPress={() => {
                setStep(prev => {
                  if (prev - 1 !== 0) {
                    return prev - 1;
                  }
                  return prev;
                });
              }}>
              <BackIcon />
            </TouchableOpacity>
          </View>
        )}
        {step === 1 && (
          <View style={tw`flex-1 mb-2`}>
            <Text
              style={[
                textStyle.fs_64_700,
                tw`text-[${Colors.orange}] text-center mb-[64px]`,
              ]}>
              Sign up
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
                  value={dataInput.email}
                  onChangeText={text =>
                    setDataInput({...dataInput, email: text.toLowerCase()})
                  }
                  onFocus={() => setIsFocus({...isFocus, email: true})}
                  onBlur={() => setIsFocus({...isFocus, email: false})}
                  placeholder="Enter email"
                  style={tw`border-[${
                    isFocus.email ? Colors.orange : Colors.lightGray
                  }] border-[1px] rounded-lg px-4`}
                  autoCapitalize="none"
                />
              </View>
              <View style={tw`mb-5`}>
                <Text
                  style={[
                    textStyle.fs_14_700,
                    tw`text-[${Colors.primaryText}] mb-[2px]`,
                  ]}>
                  Password
                </Text>
                <TextInput
                  value={dataInput.password}
                  onChangeText={text =>
                    setDataInput({...dataInput, password: text})
                  }
                  onFocus={() => setIsFocus({...isFocus, password: true})}
                  onBlur={() => setIsFocus({...isFocus, password: false})}
                  placeholder="Enter password"
                  style={tw`border-[${
                    isFocus.password ? Colors.orange : Colors.lightGray
                  }] border-[1px] rounded-lg px-4 text-[${
                    Colors.secondaryText
                  }]`}
                />
              </View>
              <View>
                <Button
                  wfull
                  txtStyle={textStyle.fs_20_700}
                  text={'Create an account'}
                  onClick={() => {
                    stepOne();
                  }}
                />
                <Text
                  style={[
                    textStyle.fs_14_400,
                    {color: Colors.primaryText},
                    tw`self-center mt-2 text-center`,
                  ]}>
                  Already have an account?{' '}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('vendorRoute', {screen: 'login'})
                    }
                    style={{padding: 0, margin: 0}}>
                    <Text
                      style={[
                        textStyle.fs_14_400,
                        {color: Colors.primaryText},
                        tw`underline mb-[-2px] text-[${Colors.orange}]`,
                      ]}>
                      Login here
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
                <View
                  style={tw`w-[20%] h-[2px] bg-[${Colors.primaryText}]`}></View>
                <Text
                  style={[
                    textStyle.fs_14_700,
                    tw`text-[${Colors.primaryText}] mb-[2px]`,
                  ]}>
                  or
                </Text>
                <View
                  style={tw`w-[20%] h-[2px] bg-[${Colors.primaryText}]`}></View>
              </View>
              <Button
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
        )}
        {step === 2 && (
          <View style={tw`flex-1`}>
            <Text
              style={[
                textStyle.fs_48_700,
                tw`text-[${Colors.orange}] mb-[64px]`,
              ]}>
              Tell Us About Your Business
            </Text>
            <View style={tw`flex-1 gap-5 mb-16 `}>
              <View>
                <Text
                  style={[
                    textStyle.fs_14_700,
                    tw`text-[${Colors.primaryText}] mb-[2px]`,
                  ]}>
                  Business Name *
                </Text>
                <TextInput
                  value={dataInput.business_name}
                  onChangeText={text =>
                    setDataInput({...dataInput, business_name: text})
                  }
                  onFocus={() => setIsFocus({...isFocus, business_name: true})}
                  onBlur={() => setIsFocus({...isFocus, business_name: false})}
                  placeholder="Enter Business Name"
                  style={tw`border-[${
                    isFocus.business_name ? Colors.orange : Colors.lightGray
                  }] border-[1px] rounded-lg px-4`}
                />
              </View>
              <View style={tw`mb-9`}>
                <Text
                  style={[
                    textStyle.fs_14_700,
                    tw`text-[${Colors.primaryText}] mb-[2px]`,
                  ]}>
                  Location *
                </Text>
                <TextInput
                  value={dataInput.location}
                  onChangeText={text =>
                    setDataInput({...dataInput, location: text})
                  }
                  onFocus={() => setIsFocus({...isFocus, location: true})}
                  onBlur={() => setIsFocus({...isFocus, location: false})}
                  placeholder="Enter Address"
                  style={tw`border-[${
                    isFocus.location ? Colors.orange : Colors.lightGray
                  }] border-[1px] rounded-lg px-4 text-[${
                    Colors.secondaryText
                  }]`}
                />
              </View>
              <View>
                <Button
                  wfull
                  txtStyle={textStyle.fs_20_700}
                  text={'Next'}
                  onClick={() => {
                    stepTwo();
                  }}
                />
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
            </View>
          </View>
        )}
        {step === 3 && (
          <View style={tw`flex-1`}>
            <Text
              style={[
                textStyle.fs_48_700,
                tw`text-[${Colors.orange}] mb-[64px]`,
              ]}>
              Verify Your Email
            </Text>
            <View style={tw`gap-5 mb-16`}>
              <View>
                <Text
                  style={[
                    textStyle.fs_16_400,
                    tw`text-[${Colors.primaryText}] mb-[2px]`,
                  ]}>
                  We’ve sent an OTP to the email address xyz@gmail.com . Please
                  check your inbox and click the verification link to complete
                  your signup.
                </Text>
              </View>
              <View style={tw`flex-row items-center justify-between mt-8 mb-1`}>
                {otp.map((value, index) => (
                  <TextInput
                    key={index}
                    value={value}
                    onChangeText={text => handleChange(text, index)}
                    onKeyPress={e => handleKeyPress(e, index)}
                    onFocus={() => handleFocus(index)}
                    onBlur={handleBlur}
                    style={tw`h-[50px] w-[50px] border-[1px] rounded-md  text-center  border-[${
                      focusedIndex === index ? Colors.orange : Colors.gray_25
                    }] bg-[${Colors.gray_25}]/20`}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={ref => (inputs.current[index] = ref)}
                  />
                ))}
              </View>
              <Text
                style={[
                  textStyle.fs_14_400,
                  {color: Colors.primaryText},
                  tw`mb-9`,
                ]}>
                Didn't receive the OTP?{' '}
                <TouchableOpacity
                  onPress={sendOTP}
                  style={{padding: 0, margin: 0}}>
                  <Text
                    style={[
                      textStyle.fs_14_400,
                      {color: Colors.orange},
                      tw`underline mb-[-2px] `,
                    ]}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              </Text>
              <View>
                <Button
                  onClick={stepThree}
                  wfull
                  txtStyle={textStyle.fs_20_700}
                  text={'Next'}
                />
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
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Signup;
