import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const HeaderMenu = () => {
  return (
    <View style={styles.head}>
      <Pressable
        style={({ pressed }: any) => [
          styles.backBtn,
          pressed && styles.backBtnHovered,
        ]}
      >
        <Text>←</Text>
      </Pressable>
      <Text style={styles.headerText}>Time stack</Text>
   
      <Pressable
        style={({ pressed }: any) => [
          styles.backBtn,
          pressed && styles.backBtnHovered,
        ]}
      >
        <Image source={require("../svg/pencil.svg")} alt="pencil" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "115%",
    height: "120%",
    zIndex: 0,
  },
  head: {
    marginTop: 20,
    flexDirection: "row",
  },
  headerText: {
    color: "white",
    flex: 1,
    marginTop: 10,
    textAlign: "center",
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

export default HeaderMenu;
