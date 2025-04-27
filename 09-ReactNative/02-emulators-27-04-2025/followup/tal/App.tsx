import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.content}>
       <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
        <WhatsAppMessageCard />
      </View>
     
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
    marginTop: 50, // To account for the header height
    alignItems: 'center',
    justifyContent: 'center',
  },
});