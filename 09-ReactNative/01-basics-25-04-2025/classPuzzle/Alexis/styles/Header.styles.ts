import { Colors } from "./colors";
import {StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 0,
    padding: '5%',
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        },
    iconButton: {
        marginLeft: 18,
        },
    });
export default headerStyles;