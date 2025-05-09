<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("./images/womenStretch.png")}
        alt="woman stretching"
      />

      <View style={styles.head}>
        <View style={styles.backBtn}>←</View>
        <Text style={styles.headerText}>Time stack</Text>
        <View style={styles.backBtn}>←</View>
      </View>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Day from './components/Day';
import ActivityCard from './components/Card';
export default function App() {
  return (
    <View >
      <Day />
      <ActivityCard
          title="10 min"
          subtitle="meditation"
          stars={13}
          duration="4 h"
          timerValue="10"
          backgroundColor="#C89B6C"
        />
>>>>>>> 7b1e77f99ce23a4afb5511b7cb57a43b8e5ba1bd
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 0,
  },
  head: {
    flexDirection: "row",
  },
  headerText: {
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  backBtn: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
=======
>>>>>>> 7b1e77f99ce23a4afb5511b7cb57a43b8e5ba1bd
