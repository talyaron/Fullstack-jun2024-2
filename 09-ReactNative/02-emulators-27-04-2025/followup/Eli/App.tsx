import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBeeg}>Beeeg Phone</Text>
      <Text style={styles.textSmall}>small</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }, textBeeg: {
   fontSize:99,
   color:"white"
  }, textSmall: {
    fontSize:22,
    color:"green"
   },
});
