import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

type ButtonProps = {
  icon?: string | ReactNode;
  text: string;
  border?:boolean
};

const InfoButton: React.FC<ButtonProps> = ({ icon, text,border=false }) => {
  const renderIcon = () => {
    if (!icon) return null;

    if (typeof icon === "string") {
      return <Text style={styles.icon}>{icon}</Text>;
    }

    return icon;
  };

  return (
    <View style={[styles.button,border&& styles.border]}>
      <Text style={styles.text}>
        {renderIcon()} {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
   
   
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    marginVertical: 4,
  },border:{
    borderColor: "white",
     borderWidth: 1,
    borderRadius: 20,
  },
  icon: {
    marginRight: 6,
    color: "white",
  },
  text: {
    color: "white",

    fontSize: 14,
    fontWeight: "500",
  },
});

export default InfoButton;
