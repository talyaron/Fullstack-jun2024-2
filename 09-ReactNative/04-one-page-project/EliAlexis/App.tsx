<<<<<<<<< Temporary merge branch 1
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
import { Colors } from "./styles/colors";
import SecondHeader from "./components/SecondHeader";
import InfoButton from "./components/Button";
import ActivityCard from "./components/Card";

export default function App() {
  const [showSecondScreen, setShowSecondScreen] = useState(false);
  if (showSecondScreen) {
    return (
      <View style={styles.container2}>
        <SecondHeader onPress={() => setShowSecondScreen(false)}/>
        <Text style={styles.hugeText2}>Daily Activity</Text>
        <Day />
        <View style={styles.viewline}>
          <InfoButton icon="✩" text="20th" border={true} />
          <Text style={styles.info}>Ratings</Text>{" "}
        </View>
        <View style={styles.viewline}>
          <InfoButton icon="⏱" text="11 months" border={true} />
          <Text style={styles.info}>Views</Text>
        </View>{" "}
        <View style={styles.viewline}>
          <InfoButton icon="✩" text="111 people rated" border={true} />

          <Text style={styles.info}>Fun Facts</Text>
        </View>
        <View style={styles.section}>
          <ActivityCard
            title="10 min"
            subtitle="meditation"
            stars={5}
            duration="4h"
            timerValue="10 min"
            backgroundColor="grey"
          />
          <ActivityCard
            title="15 min"
            subtitle="pilates"
            stars={45}
            duration="45h"
            timerValue="45 min"
            backgroundColor="#FFEFF5"
          />
        </View>
        <Text style={styles.lastline}>This week Thursday was the best performance</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={require("./images/womenStretch.png")}
            style={styles.img}
            resizeMode="cover"
          />{" "}
        </View>
        <HeaderMenu />
        <Text style={styles.hugeText}>Morning Workout</Text>
        <View style={styles.row}>
          <Button icon="✩" text="72" border={true} />
          <Button icon="⏱" text="8 hours" border={true} />
        </View>
        <View style={styles.row}>
          <TransparentComp word={hashTagsModel[0]} />
          <TransparentComp word={hashTagsModel[1]} />
          <TransparentComp word={hashTagsModel[2]} />
        </View>

        <Button icon="🕭" text="morning activity " />
        <Button icon="◰" text="4 successful days" />

        <BigButton onPress={() => setShowSecondScreen(true)} />

        <StatusBar style="auto" />
      </View>

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

    </View>
  );
}

<<<<<<<<< Temporary merge branch 1
const styles = StyleSheet.create({
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
    paddingRight:15,
    margin:5,
    display:"flex",
    alignItems:"flex-start",
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
    display: "flex",
    textAlign: "center",
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
    fontWeight: 400,
    color: "black",
    marginTop: 30,
    marginBottom: 0,
    display: "flex",
    textAlign: "center",
  },
  viewline: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
});
=========
>>>>>>>>> Temporary merge branch 2
