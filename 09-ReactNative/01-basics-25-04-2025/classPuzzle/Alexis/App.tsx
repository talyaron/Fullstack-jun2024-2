import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';
import mainStyles from './styles/pageStyle';

export default function App() {
  return (
    <View style={mainStyles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}


