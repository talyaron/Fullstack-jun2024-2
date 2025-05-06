import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopNav from './components/TopNav';
import MiddleNav from './components/MiddleNav'
import BottomNav from './components/BottomNav';
import Chats from './components/Chats';
import Bottom from './components/Bottom';


export default function App() {
  return (
    <View style={styles.container}>
    <TopNav />
    <MiddleNav /> 
    <BottomNav />
    <Chats />
    <Bottom />
    <StatusBar style="auto" />
   
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
