import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ChatRoom from "./components/ChatRoom/ChatRoom";

export default function App() {
  return (
    <View>
      <View style={styles.navBarUp}>
        <Text style={{ left: 0, color:'white', fontSize:25 }}>Massenager App</Text>
        <Icon name="search" size={24} color="white" style={{left: 120}}/>
        <Icon name="more-vert" size={24} color="white" style={{left: 130}}/>
      </View>
      <View style={styles.navBarDown}>
        <Icon name="camera-alt" size={24} color="white" />
        <Text style={styles.textWhite}>Chat</Text>
        <Text style={styles.textWhite}>Status</Text>
        <Text style={styles.textWhite}>Calls</Text>
      </View>
      <FlatList
        data={[
          { id: '1', name: 'Suzy', data: '10.2.2025' },
          { id: '2', name: 'Itemad', data: '15:09' },
          { id: '3', name: 'Yosef', data: 'yestardy' },
          { id: '4', name: 'Alex', data: '10.5.2025' },
          { id: '5', name: 'Chat 5', data: '1.2.2020' },
          { id: '6', name: 'Chat 6' },
          { id: '7', name: 'Chat 7' },
          { id: '8', name: 'Chat 8' },
          { id: '9', name: 'Chat 9' },
          { id: '10', name: 'Chat 10' },
          { id: '11', name: 'Chat 11' },
          { id: '12', name: 'Chat 12' },
          { id: '13', name: 'Chat 13' },
          { id: '14', name: 'Chat 14' },
          { id: '15', name: 'Chat 15' },
          { id: '16', name: 'Chat 16' },
          { id: '17', name: 'Chat 17' },
          { id: '18', name: 'Chat 18' },
          { id: '19', name: 'Chat 19' },
          { id: '20', name: 'Chat 20' },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatRoom name={item.name} date={item.data} />}
      />
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
