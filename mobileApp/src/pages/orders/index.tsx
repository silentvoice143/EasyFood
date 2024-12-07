import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import OrderCard from '../../components/orderCard';
import {Colors} from '../../constants/color';
import tw from 'twrnc';
import SearchIcon from '../../assets/svg/searchIcon';
import SearchBox from '../../components/searchBox';

const OrderReceived = ({navigation}: any) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 20,
      }}>
      <View style={tw`mb-4`}>
        <SearchBox
          onClick={(text: string) => {
            console.log(text);
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: Colors.white,
          gap: 16,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('vendorRoute', {screen: 'orderdetail'})
          }
          style={{marginVertical: 12}}>
          <OrderCard />
        </TouchableOpacity>
        <View style={{marginVertical: 12}}>
          <OrderCard />
        </View>
        <View style={{marginVertical: 12}}>
          <OrderCard />
        </View>
        <View style={{marginVertical: 12}}>
          <OrderCard />
        </View>
        <View style={{marginVertical: 12}}>
          <OrderCard />
        </View>
        <View style={{marginVertical: 12}}>
          <OrderCard />
        </View>
        <View style={{marginVertical: 12}}>
          <OrderCard />
        </View>
        <View style={{marginVertical: 12}}>
          <OrderCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderReceived;
