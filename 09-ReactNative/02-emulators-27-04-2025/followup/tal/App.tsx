import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { textMain } from './assets/colors';
import WhatsAppMessageCard from './componentes/chatCard/ChatCard';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: textMain }}>WhatsApp</Text>
        <Text style={{ fontSize: 16 }}>Menu</Text>
      </View>
      <FlatList style={styles.content} 
        data={[{message:"message 1"},
           {message:"message 2"},{message:"message 3",},{message:"message 4"},{message:"message 5"},{message:"message 6"},
           {message:"message 7"},{message:"message 8"},{message:"message 9"},{message:"message 10"},{message:"message 11"},{message:"message 12"},{message:"message 13"},
           {message:"message 14"},{message:"message 15"},{message:"message 16"},{message:"message 17"},{message:"message 18"},
           {message:"message 19"},{message:"message 20"},{message:"message 21"},{message:"message 22"},{message:"message 23"},{message:"message 24"},
           {message:"message 25"},{message:"message 26"},{message:"message 27"},{message:"message 28"},{message:"message 29"},]} 
        renderItem={({ item }) => <WhatsAppMessageCard message={item.message} />}
      
        keyExtractor={(item, index) => index.toString()} 
      /> 
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 1,
  },
  content: {
    flex: 1,
        paddingTop: 200,
       gap:5
  },
});