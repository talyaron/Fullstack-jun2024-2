import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import TransparentComp from "./components/TransparentComp";
import { hashTagsModel } from "./model/hashTagModel";
import HeaderMenu from "./components/HeaderMenu";
import Button from "./components/Button";
import BigButton from "./components/BigButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.img}
          source={require("./images/womenStretch.png")}
          alt="woman stretching"
        />
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

       <Button icon="🕭" text="morning activity "  />
       <Button icon="◰" text="4 successful days"  />

       <BigButton></BigButton>
      <StatusBar style="auto" />
      <View style={styles.middleBar}> </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
    width: "100%",
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
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
  },middleBar:{
    width:"30%",
    backgroundColor:"white",
    height:6,
    position:"absolute",
    borderRadius:20,
    bottom:3,
    left:"35%"
  }
});
