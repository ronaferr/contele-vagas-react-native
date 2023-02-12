import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerBtnInterval: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
    option: {
      fontSize: 20,
      color: 'gray',
      textAlign: 'center',
    },
    unselected: {
      width: 70,
      height: 70,
      backgroundColor: '#e5e5e5',
      margin: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center'
    },
    selected: {
      width: 70,
      height: 70,
      backgroundColor: '#dbead5',
      margin: 6,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#6ac780',
    },
  });

export default styles;
