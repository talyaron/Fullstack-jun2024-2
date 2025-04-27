import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Openasda up App.tsx to start workiasdng on your app!</Text>
      <Text>Changes you make will automatically reload the app.</Text>
      <Text>Shake your phone toasd open the developer menu.</Text>
      <Text>Yosef</Text>
      <View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 20,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
