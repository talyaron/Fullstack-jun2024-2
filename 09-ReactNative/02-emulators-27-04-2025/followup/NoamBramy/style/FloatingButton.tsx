import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const buttonStyles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});