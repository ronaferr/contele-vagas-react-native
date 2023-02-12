import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 65,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  header: {
    marginTop: 0,
    height: 60,
    backgroundColor: '#1a6cb2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 17,
    color: 'white',
  },
  headerTitle: {
    marginRight: 130,
    fontSize: 20,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
