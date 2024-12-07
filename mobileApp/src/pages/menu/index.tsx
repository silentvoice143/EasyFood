import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import MenuCard from '../../components/menuCard';
import {textStyle} from '../../constants/textStyle';
import {Colors} from '../../constants/color';
import SearchBox from '../../components/searchBox';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {
  deleteMenuItem,
  getAllMenuItems,
  getUserMenuItems,
} from '../../store/reducer/menu';

const data = ['Veg', 'Non-veg', 'Egg', 'Paneer'];

const Menu = ({navigation}: any) => {
  const isVendor = useAppSelector(state => state.role.isVendor);
  const refresh = useAppSelector(state => state.menu.isOpen);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState<any>([]);
  const [refreshList, setRefreshList] = useState<boolean>(false);

  const getMenuItemsList = async () => {
    try {
      const {payload}: any = await dispatch(
        isVendor ? getUserMenuItems() : getAllMenuItems(),
      );
      console.log(payload, '-----list of items');

      if (payload.status === 200) {
        setItems(payload.data);
      } else if (payload.status === 400) {
        Alert.alert('Message', 'No Item added, Please add item');
      } else {
        Alert.alert('Something went wrong!');
      }
    } catch (err) {
      Alert.alert('Something went wrong!');
    }
  };

  const deleteMenuItemsFromList = async (id: string) => {
    try {
      const {payload}: any = await dispatch(deleteMenuItem(id));

      if (payload.status === 200) {
        Alert.alert('Item deleted successfully!');
        setRefreshList(prev => !prev);
      } else {
        Alert.alert('Something went wrong!');
      }
    } catch (err) {
      Alert.alert('Something went wrong!');
    }
  };

  useEffect(() => {
    if (refresh === false) {
      getMenuItemsList();
    }
  }, [refreshList, refresh]);
  return (
    <View style={tw`bg-[${Colors.white}] flex-1`}>
      <View style={tw`px-4 my-4`}>
        <SearchBox
          onClick={(text: string) => {
            console.log(text);
          }}
        />
      </View>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={tw`flex-row gap-4 items-center px-4 bg-[${Colors.white}] min-w-[100%] h-[52px]`}>
          {data.map((item, idx) => (
            <TouchableOpacity
              key={`${idx} filter`}
              style={tw`border-[1px] px-4 h-[30px] justify-center rounded-full border-[${Colors.lightGray}]`}>
              <Text
                style={[textStyle.fs_14_400, {color: Colors.lightGray}, tw``]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={tw`pb-[136px]`}>
        <ScrollView
          contentContainerStyle={tw``}
          showsVerticalScrollIndicator={false}>
          {items.map((i: any, idx: number) => (
            <MenuCard
              isVendor={isVendor}
              id={i._id}
              name={i.name}
              imgUrl={i.imgUrl}
              index={idx}
              price={i.price}
              priceOff={i.priceOff}
              category={i.category}
              deleteCard={deleteMenuItemsFromList}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Menu;
