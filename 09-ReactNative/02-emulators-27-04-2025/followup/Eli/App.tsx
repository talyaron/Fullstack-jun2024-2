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
  },
  blue: {
    backgroundColor: "blue",
    width: 500,
    height: 333,
  },
  white: {
    backgroundColor: "white",
    width: 500,
    height: 333,
  },
  red: {
    width: 500,
    height: 333,
    backgroundColor: "red",
  },
});
