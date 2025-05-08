import { StyleSheet } from "react-native";
import { Colors } from "../styles/colors";

export const DayItem = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.background,
    height:"25%",
  },

  day: {
    display: "flex",
    flexDirection: "column",
    padding: 7,
    margin: 2,
    color: "white",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"white",
    width: "10%",
  

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
  