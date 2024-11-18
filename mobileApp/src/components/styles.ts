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
