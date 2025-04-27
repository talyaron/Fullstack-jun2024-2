import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.chatItem}>
          <View style={styles.avatar}></View>
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>John Doe</Text>
            <Text style={styles.chatMessage}>Hey, how are you doing?</Text>
          </View>
          <Text style={styles.chatTime}>10:30 AM</Text>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.chatItem}>
          <View style={styles.avatar}></View>
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Family Group</Text>
            <Text style={styles.chatMessage}>
              Mom: Can someone pick up bread?
            </Text>
          </View>
          <Text style={styles.chatTime}>9:45 AM</Text>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.chatItem}>
          <View style={styles.avatar}></View>
          <View style={styles.chatInfo}>
            <Text style={styles.chatName}>Sarah Wilson</Text>
            <Text style={styles.chatMessage}>
              Let's meet for coffee tomorrow
            </Text>
          </View>
          <Text style={styles.chatTime}>Yesterday</Text>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#075E54",
    height: 60,
    width: "100%",
    paddingTop: 10,
    paddingLeft: 15,
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
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
