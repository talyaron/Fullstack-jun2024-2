import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SecondHeader = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.headerText}>Calendar</Text>

      <Pressable
        style={({ pressed }: any) => [
          styles.backBtn,
          pressed && styles.backBtnHovered,
        ]}
      >
        <Text style={styles.arrow}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
    alignItems:"flex-end",
    backgroundColor: Colors.background,
    color: "black",
    width:"80%",
    marginTop:30,
    marginLeft:"15%",
  },
  headerText: {
    color: "black",
    flex: 1,
    marginTop: 10,
    textAlign: "center",
  },
  arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    fontSize: 20,
    margin: 0,
    backgroundColor: "white",
    borderRadius: 50,
    width: 20,
    height: 20,
  },

  backBtn: {
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: 50,

    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtnHovered: {
    transform: [{ scale: 1.1 }],
  },
});

export default SecondHeader;
