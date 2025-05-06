import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.mid} />
      <View style={styles.bot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column",
  },
  header: {
    flex: 1,
    backgroundColor: "red",
  }, 
  mid: {
    flex: 1,
    backgroundColor: "blue",
  },
  bot: {
    flex: 1,
    backgroundColor: "green",
  },
});
