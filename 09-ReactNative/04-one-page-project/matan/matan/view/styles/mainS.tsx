import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    width: 160,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 50,
    resizeMode: 'contain',
    right: 30,
    marginTop: -20,
  },

  iconTwo: {
    width: 50,
    height: 100,
    marginBottom: 50,
    resizeMode: 'contain',
    right: 30,
    marginTop: -20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    right: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    right: 19,
  },
});

export default styles;
