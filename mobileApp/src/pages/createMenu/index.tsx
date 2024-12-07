import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import {Colors} from '../../constants/color';
import {textStyle} from '../../constants/textStyle';
import CloseIcon from '../../assets/svg/closeIcon';
import Button from '../../components/button';
import MultiChoice from '../../components/multiChoice';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import {
  createMenuItem,
  editMenuItem,
  getMenuItems,
} from '../../store/reducer/menu';
import {getMenuitemById} from '../../store/reducer/menu/action';

const CrateMenu = ({onClose = () => {}}) => {
  const dispatch = useAppDispatch();
  const type = useAppSelector(state => state.menu.modalType);
  const itemId = useAppSelector(state => state.menu.itemId);
  const data = ['Egg', 'Veg', 'Non-Veg'];
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [isFocus, setIsFocus] = useState({
    name: false,
    price: false,
    priceOff: false,
  });
  const initialDetail = {
    name: '',
    price: '',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NkDG1_1CVqH1A8CYlVVdy_a_rj6jpXmGOg&s',
    priceOff: '',
  };

  const [itemDetail, setItemDetail] = useState(initialDetail);

  const filterCondition = (item: string) => {
    if (item === 'Non-Veg' || item === 'Egg') {
      setSelectedItem((prev: any) => prev.filter((i: string) => i !== 'Veg'));
    } else if (item === 'Veg') {
      setSelectedItem((prev: any) =>
        prev.filter((i: string) => i !== 'Non-Veg' && i !== 'Egg'),
      );
    }
  };
  const getDetail = async () => {
    try {
      const {payload} = await dispatch(getMenuitemById(itemId));
      console.log(payload, '-------------payload');
      if (payload.status === 200) {
        console.log(
          'Item retrieved successfully-----------,',
          payload.data.data,
        );
        setItemDetail({
          name: payload.data.data.name,
          price: payload.data.data.price,
          imgUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NkDG1_1CVqH1A8CYlVVdy_a_rj6jpXmGOg&s',
          priceOff: payload.data.data.priceOff,
        });
        setSelectedItem(payload.data.data.category);
      } else {
        Alert.alert('Something went wrong!');
      }
    } catch (err) {
      Alert.alert('something is wrong!');
    }
  };

  const onCreate = async () => {
    try {
      const dataObj = {category: selectedItem, ...itemDetail};
      console.log(dataObj);
      const {payload} = await dispatch(createMenuItem(dataObj));
      // console.log(payload, '-------------payload');
      if (payload.status === 201) {
        Alert.alert('Item saved successfully!');
        onClose();
      } else {
        Alert.alert('Something went wrong!');
      }
    } catch (err) {
      Alert.alert('something is wrong!');
    }
  };
  const onEdit = async () => {
    try {
      const dataObj = {
        id: itemId,
        data: {category: selectedItem, ...itemDetail},
      };

      const {payload} = await dispatch(editMenuItem(dataObj));
      // console.log(payload, '-------------payload');
      if (payload.status === 200) {
        Alert.alert('Item edited successfully!');
        onClose();
      } else {
        Alert.alert('Something went wrong!');
      }
    } catch (err) {
      Alert.alert('something is wrong!');
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      getDetail();
    }
  }, []);
  return (
    <View
      style={tw`h-full flex-1 w-full absolute top-0 left-0 z-50 bg-[${Colors.grayshadeE9}]`}>
      <View
        style={tw`px-4 flex-row items-center justify-between py-4 bg-[${Colors.white}]`}>
        <Text
          style={[textStyle.fs_20_700, {color: Colors.darkGray}, tw`w-[50%]`]}>
          {type === 'create' ? 'Create Item' : 'Edit Item'}
        </Text>
        <TouchableOpacity onPress={onClose} style={tw``}>
          <CloseIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={tw`px-4 flex-1 flex-col gap-2 justify-center bg-[${Colors.white}] rounded-lg relative`}>
        <View
          style={tw`absolute w-[200px] h-[200px] border-[1px] border-[${Colors.orange}]/20 rounded-full top-[8%] -right-10`}></View>
        <View
          style={tw`absolute w-[232px] h-[232px]  rounded-full top-[5%] -right-10 border-[2px] border-[${Colors.orange}]/20`}></View>
        <View
          style={tw`absolute w-[200px] h-[200px] border-[1px] border-[${Colors.orange}]/20 rounded-full -bottom-10 -left-10`}></View>
        <View
          style={tw`absolute w-[232px] h-[232px]  rounded-full -bottom-10 -left-10 border-[2px] border-[${Colors.orange}]/20`}></View>
        <View style={tw`items-center`}>
          <TouchableOpacity>
            <Image source={require('../../assets/img/pizza.png')} />
          </TouchableOpacity>
        </View>
        <Text style={[textStyle.fs_20_400, tw`mb-4`]}>Details</Text>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Food Name *
          </Text>
          <TextInput
            onFocus={() => setIsFocus({...isFocus, name: true})}
            onBlur={() => setIsFocus({...isFocus, name: false})}
            value={itemDetail.name}
            onChangeText={(text: string) =>
              setItemDetail((prev: any) => {
                return {...prev, name: text};
              })
            }
            placeholder="Enter Food Name"
            style={tw`border-[${
              isFocus.name ? Colors.orange : Colors.lightBorder
            }]/75 border-[1px] rounded-lg px-4`}
          />
        </View>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Price *
          </Text>
          <TextInput
            onFocus={() => setIsFocus({...isFocus, price: true})}
            onBlur={() => setIsFocus({...isFocus, price: false})}
            value={itemDetail.price.toString()}
            onChangeText={(text: string) =>
              setItemDetail((prev: any) => {
                return {...prev, price: text};
              })
            }
            placeholder="Price"
            style={tw`border-[${
              isFocus.price ? Colors.orange : Colors.lightBorder
            }]/75 border-[1px] rounded-lg px-4`}
          />
        </View>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Discounted Price *
          </Text>
          <TextInput
            onFocus={() => setIsFocus({...isFocus, priceOff: true})}
            onBlur={() => setIsFocus({...isFocus, priceOff: false})}
            value={itemDetail.priceOff.toString()}
            onChangeText={(text: string) =>
              setItemDetail((prev: any) => {
                return {...prev, priceOff: text};
              })
            }
            placeholder="Enter Discounted Price"
            style={tw`border-[${
              isFocus.priceOff ? Colors.orange : Colors.lightBorder
            }]/75 border-[1px] rounded-lg px-4`}
          />
        </View>
        <View>
          <Text
            style={[
              textStyle.fs_14_700,
              tw`text-[${Colors.primaryText}] mb-[2px]`,
            ]}>
            Category *
          </Text>
          <MultiChoice
            data={data}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            filter={filterCondition}
          />
        </View>
      </ScrollView>
      <View style={tw`mt-4 py-6 bg-[${Colors.white}] px-4 rounded-t-2xl`}>
        <Button
          onClick={() => {
            type === 'edit' ? onEdit() : onCreate();
          }}
          wfull
          txtStyle={textStyle.fs_20_700}
          text={'Save'}
        />
      </View>
    </View>
  );
};

export default CrateMenu;
