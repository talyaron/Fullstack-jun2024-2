import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blue}></View>
      <View style={styles.white}></View>
      <View style={styles.red}></View>
      <StatusBar style="auto" />
=======
import { StyleSheet, View, Text, FlatList } from "react-native";
import Message from "./components/message";
import { messagesModel } from "./model/messages";

export default function App() {
  const messages = messagesModel;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text>
      </View>

      <FlatList
        style={styles.content}
        data={messages}
        keyExtractor={(item) => item.timestamp}
        renderItem={({ item }) => (
          <Message
            name={item.name}
            message={item.message}
            timestamp={item.timestamp}
          />
        )}
      />

      <StatusBar style="light" />
>>>>>>> origin/main
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
  blue: {
    backgroundColor: "blue",
    width: 333,
    height: 10000,
  },
  white: {
    backgroundColor: "white",
    width: 211,
    height: 10000,
  },
  red: {
    width: 333,
    height: 10000,
    backgroundColor: "red",
=======
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
>>>>>>> origin/main
  },
});
