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
        <Text style={styles.arrow}>←</Text>
      </Pressable>
      <Text style={styles.headerText}>Time stack</Text>

      <Pressable
        style={({ pressed }: any) => [
          styles.backBtn,
          pressed && styles.backBtnHovered,
        ]}
      >
        <Image
          style={styles.arrow}
          resizeMode="contain"
          source={require("../svg/pencil.svg")}
          alt="pencil"
        />
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
    display: "flex",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
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

export default HeaderMenu;
