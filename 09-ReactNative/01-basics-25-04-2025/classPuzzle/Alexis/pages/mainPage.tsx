import React from 'react';
import { View, FlatList } from 'react-native';
import ChatItem from '../components/ChatItem';
import Header from '../components/header';
import mainPageStyles from '../styles/MainPage.styles';

const dummyChats = [
  { id: '1', name: 'Alexis', lastMessage: 'Hey there!', time: '12:30' },
  { id: '2', name: 'George', lastMessage: 'See you soon', time: '14:50' },
];

const MainPage = ({ navigation }: any) => {
  return (
    <View style={mainPageStyles.container}>
      <Header />
      <FlatList
        data={dummyChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatItem
            name={item.name}
            lastMessage={item.lastMessage}
            time={item.time}
            onPress={() => navigation.navigate('Chat', { chatName: item.name })}
          />
        )}
      />
    </View>
  );
};

export default MainPage;
