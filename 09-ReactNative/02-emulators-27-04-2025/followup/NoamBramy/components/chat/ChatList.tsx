import React from 'react';
import { FlatList } from 'react-native';
import ChatItem from './ChatItem';
import { Chat, ChatListProps } from '../../model/Chat';
import { chatListStyles } from '../../style/Chat';


const ChatList: React.FC<ChatListProps> = ({ chats }) => {

  const renderItem = ({ item }: { item: Chat }) => (
    <ChatItem chatData={item}/>
  );


  return (
    <FlatList
      data={chats}
      renderItem={renderItem}
      style={chatListStyles.list}
    />
  );
};

export default ChatList;