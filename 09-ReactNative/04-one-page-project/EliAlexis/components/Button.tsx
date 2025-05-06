import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../styles/colors";

interface ButtonProps {
  iconName: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ iconName, text }) => {
  return (
    <View style={styles.button}>
      <FontAwesome name={iconName} size={12} color={Colors.black} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginVertical: 4,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Button;
