import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ChatRoom from "./components/ChatRoom/ChatRoom";

export default function App() {
  return (
    <View>
      <View style={styles.navBarUp}>
        <Text style={{ left: 0, color:'white' }}>Massenager App</Text>
        <Text style={{ left: 200 }}>🔎</Text>
        <Text style={{ left: 230, color: "white" }}>:</Text>
      </View>
      <View style={styles.navBarDown}>
        <Icon name="camera-alt" size={24} color="white" />
        <Text style={styles.textWhite}>Chat</Text>
        <Text style={styles.textWhite}>Status</Text>
        <Text style={styles.textWhite}>Calls</Text>
      </View>
      <ChatRoom name="Suzy" />
      <ChatRoom name="Etimad" />
      <ChatRoom name="yosef" />
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
    alignItems: "center", // Added to center items vertically
  },
  textWhite: {
    color: "white",
    fontSize: 16, // Added to make text more visible
    fontWeight: "bold", // Added for better visibility
  },
});
