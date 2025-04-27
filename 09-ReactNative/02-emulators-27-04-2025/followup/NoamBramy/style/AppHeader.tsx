import { Colors } from "./Colors";
import {StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    height:60,
    paddingTop: 10,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: '600',
  },
  icons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 18,
  },
});