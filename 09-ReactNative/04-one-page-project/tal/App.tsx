import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import TopNav from './src/components/TopNav/TopNav';
import ChatCard from './src/components/chat/chatCard/ChatCard';
import { useState } from 'react';

// Sample chat data
const initialMessages = [
  {
    id: '1',
    message: 'Hi there! How can I help you today?',
    isUser: false,
    timestamp: '10:00 AM'
  },
  {
    id: '2',
    message: 'I\'m looking for recommendations for my trip to Turin, Italy.',
    isUser: true,
    timestamp: '10:01 AM'
  },
  {
    id: '3',
    message: 'Turin is a beautiful city with rich history! I recommend visiting the Egyptian Museum and the Royal Palace.',
    isUser: false,
    timestamp: '10:02 AM'
  },
  {
    id: '4',
    message: 'What about food recommendations?',
    isUser: true,
    timestamp: '10:03 AM'
  },
  {
    id: '5',
    message: 'No trip to Turin would be complete without indulging in the local specialties – a rich bicerin hot drink and decadent Gianduiotto chocolates.',
    isUser: false,
    timestamp: '10:04 AM',
    hasImage: true,
    imageUrl: 'https://images.unsplash.com/photo-1553618551-6c319e713a3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleReply = (id) => {
    console.log(`Reply to message ${id}`);
  };

  const handleLike = (id) => {
    console.log(`Like message ${id}`);
  };

  const handleDelete = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
    <View style={styles.container}>
      <TopNav />
      <FlatList
        style={styles.messages}
        data={messages}
        renderItem={({ item }) => (
          <ChatCard
            message={item.message}
            isUser={item.isUser}
            timestamp={item.timestamp}
            hasImage={item.hasImage}
            imageUrl={item.imageUrl}
            onReply={() => handleReply(item.id)}
            onLike={() => handleLike(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    
      <TextInput 
        style={styles.inputText}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Type a message..."
      />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputText: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  messages:{
    width: '100%',
    height: '80%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  }
});
