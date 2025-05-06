import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 12,
  },
});
