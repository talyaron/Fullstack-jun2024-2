import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ChatItem.styles';

interface ChatItemProps {
  name: string;
  lastMessage: string;
  time: string;
  onPress: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ name, lastMessage, time, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </TouchableOpacity>
  );
};

export default ChatItem;
