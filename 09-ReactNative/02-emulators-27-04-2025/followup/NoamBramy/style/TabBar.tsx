import { Colors } from "./Colors";
import { StyleSheet } from 'react-native';

export const tabBarStyles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', 
  },
  activeTabButton: {
     borderBottomWidth: 3,
     borderBottomColor: Colors.white,
  },
  tabText: {
    color: Colors.inactiveTab,
    fontWeight: '500',
    fontSize: 14,
  },
  activeTabText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
