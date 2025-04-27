import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blue}></View>
      <View style={styles.white}></View>
      <View style={styles.red}></View>
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
  blue: {
    backgroundColor: '#0000FF',
    flex: 1,
    width: '100%',
  },
  white: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: '100%',
  },
  red: {
    backgroundColor: '#FF0000',
    flex: 1,
    width: '100%',
  }
});
