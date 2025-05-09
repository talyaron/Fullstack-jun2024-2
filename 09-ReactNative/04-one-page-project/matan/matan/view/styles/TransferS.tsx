import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 260,
    
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222',
  },
  seeAll: {
    fontSize: 13,
    color: '#888',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  positive: {
    fontSize: 13,
    fontWeight: '600',
    color: 'green',
  },
  negative: {
    fontSize: 13,
    fontWeight: '600',
    color: 'red',
  },
});

export default styles;
