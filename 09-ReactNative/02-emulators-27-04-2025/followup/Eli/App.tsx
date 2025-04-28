import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
  blue: {
    backgroundColor: "blue",
    width: 333,
    height: 10000,
  },
  white: {
    backgroundColor: "white",
    width: 211,
    height: 10000,
  },
  red: {
    width: 333,
    height: 10000,
    backgroundColor: "red",
  },
});
