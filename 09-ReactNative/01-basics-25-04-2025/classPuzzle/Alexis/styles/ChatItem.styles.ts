import { StyleSheet } from 'react-native';
import { Colors } from './colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    backgroundColor: Colors.background,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: Colors.secondary,
  },
  time: {
    color: Colors.secondary,
  },
});
