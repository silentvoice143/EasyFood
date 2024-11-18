import {View, Text, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {textStyle} from '../constants/textStyle';
import StarIcon from '../assets/svg/starIcon';
import {Colors} from '../constants/color';
import Button from './button';
import PlusIcon from '../assets/svg/plusIcon';
import MinusIcon from '../assets/svg/minusIcon';

const OrderDishCard = ({isVendor = false}) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <View style={tw`bg-[${Colors.white}]`}>
      <View style={tw`flex-row gap-2 px-4 py-5`}>
        <View style={[{height: 140, width: 140}, tw`bg-green-500 rounded-xl`]}>
          <Image source={require('../assets/img/pizza.png')} />
          <View
            style={{
              ...styles.quantityContainer,
              borderColor: Colors.orange,
              backgroundColor:
                quantity === 0 ? Colors.lightOrange : Colors.orange,
            }}>
            {quantity === 0 && (
              <Pressable
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setQuantity((prev: number) => prev + 1)}>
                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.orange,
                    fontWeight: '500',
                  }}>
                  Add
                </Text>
              </Pressable>
            )}
            {quantity !== 0 && (
              <Pressable
                style={styles.quantitybtn}
                onPress={() => setQuantity((prev: number) => prev - 1)}>
                <MinusIcon height={10} width={10} />
              </Pressable>
            )}

            {quantity !== 0 && <Text style={{color: 'white'}}>{quantity}</Text>}
            {quantity !== 0 && (
              <Pressable
                style={styles.quantitybtn}
                onPress={() => setQuantity((prev: number) => prev + 1)}>
                <PlusIcon height={15} width={15} />
              </Pressable>
            )}
          </View>
        </View>
        <View style={tw`flex-col flex-1`}>
          <Text style={textStyle.fs_20_700}>Chicken Butter Masala</Text>
          <View style={tw`flex-row items-center gap-2 my-2`}>
            <View
              style={tw`flex-row gap-1 bg-[${Colors.lightOrange}] px-2 py-1 rounded-lg`}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </View>
            <Text style={[textStyle.fs_12_500, {color: Colors.lightGray}]}>
              80 ratings
            </Text>
          </View>
          <View style={tw`my-2`}>
            <Text style={textStyle.fs_16_500}>₹234</Text>
          </View>
          <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Text
              style={[
                textStyle.fs_14_400,
                {
                  color: Colors.lightGray,
                  alignSelf: 'flex-end',
                  textAlign: 'right',
                },
              ]}>
              1 X ₹234 = ₹234
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          height: 1,
          width: '100%',
        }}>
        <View
          style={{
            height: 1,
            width: '90%',
            backgroundColor: Colors.lighterGray,
          }}></View>
      </View>
    </View>
  );
};

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    position: 'relative',
    paddingHorizontal: 18,
    paddingVertical: 22,
    backgroundColor: 'white',
  },
  topLine: {
    position: 'absolute',
    backgroundColor: '#D9D9D9',
    height: 11,
    width: '95%',
    alignSelf: 'center',
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#D9D9D9',
    height: 1,
    width: '95%',
    alignSelf: 'center',
  },
  mainContianer: {
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  leftContainer: {
    width: 150,
    position: 'relative',
    marginBottom: 15,
  },

  imgContainer: {
    height: 150,
    width: 150,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  quantityContainer: {
    overflow: 'hidden',
    height: 40,
    width: 120,
    alignSelf: 'center',
    position: 'absolute',
    bottom: -15,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantitybtn: {
    width: 30,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFeild: {color: 'white', flex: 1, textAlign: 'center'},
  rightContainer: {
    flex: 1,
    marginLeft: 12,
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
  },
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingContainer: {
    marginVertical: 10,
  },
  starContiner: {
    flexDirection: 'row',
    gap: 2,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 10,
    color: '#686868',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
});

export default OrderDishCard;
