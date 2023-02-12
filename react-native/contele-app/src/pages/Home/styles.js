import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#1a6cb2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  container: {
  },
  containerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#d3d3d3',
    height: 100,
  },
  imageMain: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textMain: {
    fontSize: 25,
    fontWeight: '600',
  },
  online: {
    fontSize: 18,
    color: '#6ac780',
  },
  containerForms: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    height: 90,
  },
  textForms: {
    fontSize: 17,
  },
  containerInterval: {
    padding: 20,
  },
  textInterval: {
    fontSize: 17,
    marginBottom: 10,
  },
  containerBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBtnInterval: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  buttonInterval: {
    backgroundColor: '#000'
  },
});

export default styles;
