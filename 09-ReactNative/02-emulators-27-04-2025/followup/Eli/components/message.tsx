import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

interface MessageProps {
  name: string;
  message: string;
  timestamp: string;
}
const Message: FC<MessageProps> = ({ name, message, timestamp }) => {
  return (
    <>
      <View style={styles.chatItem}>
        <View style={styles.avatar}></View>
        <View style={styles.chatInfo}>
          <Text style={styles.chatName}>{name}</Text>
          <Text style={styles.chatMessage}>{message}</Text>
        </View>
        <Text style={styles.chatTime}>{timestamp}</Text>
      </View>

      <View style={styles.divider}></View>
    </>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
  },
  chatInfo: {
    flex: 1,
    marginLeft: 15,
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  chatMessage: {
    color: "#555",
    fontSize: 14,
  },
  chatTime: {
    color: "#777",
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 80,
  },
});
export default Message;
