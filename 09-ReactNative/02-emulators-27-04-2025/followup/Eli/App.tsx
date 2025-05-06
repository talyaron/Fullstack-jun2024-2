import { StatusBar } from "expo-status-bar";
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
});
