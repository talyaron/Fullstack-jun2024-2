import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import TransparentComp from "./components/TransparentComp";
import { hashTagsModel } from "./model/hashTagModel";
import HeaderMenu from "./components/HeaderMenu";
import Button from "./components/Button";
import BigButton from "./components/BigButton";
import { ImageBackground } from "react-native";
import React, { useState } from "react";
import Day from "./components/Day";
import {Colors} from "./styles/colors"
import SecondHeader from "./components/SecondHeader";

export default function App() {
  const [showSecondScreen, setShowSecondScreen] = useState(false);
  // if (showSecondScreen) {
  return (
    <View style={styles.container2}>
      <SecondHeader />
      <Text style={styles.hugeText2}>Daily Activity</Text>
      <Day />
    </View>
  );
  // }else{
  // return (

  //   <View style={styles.container}>
  //     <View style={styles.imageWrapper}>
  //       <ImageBackground
  //         source={require("./images/womenStretch.png")}
  //         style={styles.img}
  //         resizeMode="cover"
  //       />{" "}
  //     </View>
  //     <HeaderMenu />
  //     <Text style={styles.hugeText}>Morning Workout</Text>
  //     <View style={styles.row}>
  //       <Button icon="✩" text="72" border={true} />
  //       <Button icon="⏱" text="8 hours" border={true} />
  //     </View>
  //     <View style={styles.row}>
  //       <TransparentComp word={hashTagsModel[0]} />
  //       <TransparentComp word={hashTagsModel[1]} />
  //       <TransparentComp word={hashTagsModel[2]} />
  //     </View>

  //     <Button icon="🕭" text="morning activity " />
  //     <Button icon="◰" text="4 successful days" />

  //     <BigButton onPress={() => setShowSecondScreen(true)} />

  //     <StatusBar style="auto" />
  //     <View style={styles.middleBar}> </View>
  //   </View>
  // );
  // }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingRight: 20,
    paddingLeft: 20,
    width: "100%",
  },
  imageWrapper: {
    paddingRight: -20,
    paddingLeft: -20,
    width: "125%",
    height: "125%",
    overflow: "hidden",
    position: "absolute",
    zIndex: 0,
    left: 0,
  },
  row: {
    flexDirection: "row",
  },
  img: {
    width: "115%",
    height: "120%",
    zIndex: 0,
  },
  hugeText: {
    fontSize: 60,
    color: "white",
    marginTop: 30,
    display:"flex",
    textAlign:"center",
  },
  middleBar: {
    width: "30%",
    backgroundColor: "white",
    height: 6,
    position: "absolute",
    borderRadius: 20,
    bottom: 3,
    left: "35%",
  },
  container2: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.background,
  },
  hugeText2: {
    fontSize: 60,
    fontWeight:100,
    color: "black",
    marginTop: 30,
    display:"flex",
    textAlign:"center",
  },
});
