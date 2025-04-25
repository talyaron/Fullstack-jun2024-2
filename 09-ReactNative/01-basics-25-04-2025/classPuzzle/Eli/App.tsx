import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>i did</Text>
      <Text style={styles.textAngry}>reload took 51 ms so long for just text</Text>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, text: {
   color:"blue",
   fontSize:90,
  }, textAngry: {
    color:"red",
    fontSize:190,
   },
});
