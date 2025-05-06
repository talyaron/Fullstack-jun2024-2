import { StyleSheet } from "react-native";
import { Colors } from "../styles/colors";

export const DayItem = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
   marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.background,
  },

  day: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    margin: 5,
    color: "white",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"white",

},

    label: {
      fontSize: 12,
      textAlign: "center",
    
    },
    date: {
      fontSize: 15,
      fontWeight: '400',
      backgroundColor: "black",
      borderRadius: 30,
      color: "white",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
        padding: 5,
    },
  });
  