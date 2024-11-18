import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {Colors} from '../../constants/color';
import {textStyle} from '../../constants/textStyle';
import OrderDishCard from '../../components/orderDishCard';
import OrderCard from '../../components/orderCard';

const MyOrder = () => {
  return (
    <ScrollView
      style={tw`bg-[${Colors.white}] rounded-lg p-4 gap-2 relative flex-1`}>
      <Text style={[textStyle.fs_20_400, {color: Colors.darkGray}]}>
        Order ID:
      </Text>
      <View
        style={tw`bg-[${Colors.lightGray}] flex-row w-[50%] justify-center rounded-lg py-2 px-2 my-2`}>
        <Text style={[textStyle.fs_16_500, {color: Colors.white}]}>
          Axxxxxx12345677
        </Text>
      </View>
      <View style={[tw`gap-2`, {flexDirection: 'row'}]}>
        <View style={tw`flex-1`}>
          <Text style={[textStyle.fs_16_500]}>Payment Status:</Text>
        </View>
        <View
          style={tw`bg-[${Colors.lightGreen}] w-[80px] rounded-md items-center border-[1px] border-[${Colors.darkGreen}]`}>
          <Text style={[textStyle.fs_16_500, {color: Colors.darkGray}]}>
            Paid
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={[
            textStyle.fs_20_400,
            {color: Colors.secondaryText, marginTop: 12},
          ]}>
          Selected Items
        </Text>
        <OrderDishCard />
        <OrderDishCard />
      </View>
      <View style={tw`flex-row mt-2`}>
        <Text style={[tw`flex-1`, textStyle.fs_16_500]}>Total</Text>
        <Text style={[tw`flex-1 text-right`, textStyle.fs_16_500]}>₹2345</Text>
      </View>
      {/* <View style={tw`gap-4 mt-8 mb-8`}>
        <Text style={[textStyle.fs_20_400, {color: Colors.secondaryText}]}>
          Recent Orders
        </Text>
        <OrderCard />
        <OrderCard />
      </View> */}
    </ScrollView>
  );
};

export default MyOrder;
