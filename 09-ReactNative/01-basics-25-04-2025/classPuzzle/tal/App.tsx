import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './assets/App.style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open 33 up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


