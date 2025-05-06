import React from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import Header from './components/header';
import ChatItem from './components/ChatItem';
import styles from './styles/MainPage.styles';

const dummyChats = [
  { id: '1', name: 'Alexis', lastMessage: 'Hey, are we still on for tonight?', time: '12:30' },
  { id: '2', name: 'George', lastMessage: 'Just sent the files!', time: '14:50' },
  { id: '3', name: 'Mom', lastMessage: 'Don’t forget to eat ❤️', time: '09:17' },
  { id: '4', name: 'JD Tactics', lastMessage: 'Check the new thumbnail I uploaded.', time: '13:05' },
  { id: '5', name: 'Boss', lastMessage: 'Let’s talk tomorrow morning.', time: '17:20' },
  { id: '6', name: 'Study Group', lastMessage: 'I made a shared doc for the quiz.', time: '16:42' },
  { id: '7', name: 'Nina', lastMessage: 'It was sooo good to see you 🥰', time: '22:01' },
  { id: '8', name: 'Yossi from Gym', lastMessage: 'Don’t skip leg day 💪', time: '07:45' },
  { id: '9', name: 'Delivery', lastMessage: 'Your package is on the way 🚚', time: '11:15' },
  { id: '10', name: 'Bar 🐶', lastMessage: 'Woof woof! 🐾 (translated by Bar)', time: '15:03' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={dummyChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem
            name={item.name}
            lastMessage={item.lastMessage}
            time={item.time}
            onPress={() => {}}
          />
        )}
      />
    </SafeAreaView>
  );
}
