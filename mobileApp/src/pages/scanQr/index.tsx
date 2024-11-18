// QRScanner.js
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import tw from 'twrnc';
import BracketIcon from '../../assets/svg/bracketIcon';
import BracketIcon1 from '../../assets/svg/bracketIcon1';
import {textStyle} from '../../constants/textStyle';
import {Colors} from '../../constants/color';
import {
  useRoute,
  RouteProp,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';

const QRScanner = ({navigation}) => {
  // const navigation = useNavigation<any>();
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const [latestScannedData, setLatestScannedData] = useState<
    string | null | undefined
  >(null);
  const [isCameraActive, setIsCameraActive] = useState(true); // Manage camera state

  useEffect(() => {
    requestPermission();
  }, []);
  const substring = 'easyfood';

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      // Update the state with the latest scanned data
      setLatestScannedData(codes[0].value);
      console.log(codes[0].value);
      if (codes[0].value?.includes(substring)) {
        navigation.navigate('CustomerScreen');
        console.log('navigating');
      } else {
        console.log('not included');
        return;
      }
    },
  });

  // Stop the camera when the screen is unfocused
  useFocusEffect(
    useCallback(() => {
      // When navigating away from this screen, stop the camera
      setIsCameraActive(true); // Enable the camera when focused

      return () => {
        setIsCameraActive(false); // Disable the camera when unfocused
      };
    }, []),
  );

  if (device == null) {
    return (
      <View>
        <Text>Device Not Found</Text>
      </View>
    );
  }

  return (
    <View style={tw`flex-1 px-4`}>
      <Text
        style={[
          textStyle.fs_48_700,
          tw`text-[${Colors.orange}] pt-[74px] pb-5 text-center`,
        ]}>
        EasyFood
      </Text>
      <View style={tw`items-center justify-center flex-1`}>
        {hasPermission ? (
          <View style={tw`items-center justify-center flex-1`}>
            <View
              style={tw`h-[260px] w-[268px] relative items-center justify-center`}>
              <View style={tw`absolute top-[-10px] w-full`}>
                <BracketIcon width={268} />
              </View>
              <View style={tw`h-[215px] w-[215px] relative absolute`}>
                <View style={tw`w-full h-full`}>
                  <Camera
                    style={StyleSheet.absoluteFill}
                    codeScanner={codeScanner}
                    device={device}
                    isActive={isCameraActive}
                  />
                </View>
              </View>
              <View style={tw`absolute bottom-[-10px] w-full `}>
                <BracketIcon1 width={268} />
              </View>
            </View>
            <Text style={[textStyle.fs_16_400, tw`my-5 text-center`]}>
              Scan the QR Code to see the menu and make your order
            </Text>
          </View>
        ) : (
          <Text>Please give camera permission to this app</Text>
        )}
      </View>
      <Text
        style={[
          textStyle.fs_14_400,
          tw`text-[${Colors.orange}] my-8 text-center`,
        ]}>
        EasyFood
      </Text>
      {/* {latestScannedData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
          <Text style={styles.resultText}>{latestScannedData}</Text>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  resultContainer: {
    position: 'absolute',
    bottom: 40, // Adjust the position to provide space between the camera view and the result container
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  resultText: {
    fontSize: 14,
    color: 'white',
  },
});

export default QRScanner;
