import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import { ChatList } from "./data/ChatList";
import Calls from "./components/Calls/Calls";
import { useState } from "react";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Chat");

  return (
    <View>
      <View style={styles.navBarUp}>
        <Text style={{ left: 0, color: "white", fontSize: 25 }}>Massenager App</Text>
        <Icon name="search" size={24} color="white" style={{ left: 120 }} />
        <Icon name="more-vert" size={24} color="white" style={{ left: 130 }} />
      </View>

      <View style={styles.navBarDown}>
        <TouchableOpacity onPress={() => setSelectedTab("Camera")}>
        <Icon name="camera-alt" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab("Chat")}>
          <Text style={styles.textWhite}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab("Status")}>
          <Text style={styles.textWhite}>Status</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab("Calls")}>
          <Text style={styles.textWhite}>Calls</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === "Chat" && (
        <FlatList
          data={ChatList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatRoom name={item.name} date={item.data} unread={item.unread} />
          )}
        />
      )}

      {selectedTab === "Calls" && <Calls />}
      {selectedTab === "Status" && (
        <View>
          <Text>Status screen here...</Text>
        </View>
      )}
      {selectedTab === "Camera" && (
        <View>
          <Icon name="camera-alt" size={400} color="red" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navBarUp: {
    flex: 0,
    marginTop: 50,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "green",
  },
  navBarDown: {
    flex: 0,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "green",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textWhite: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
