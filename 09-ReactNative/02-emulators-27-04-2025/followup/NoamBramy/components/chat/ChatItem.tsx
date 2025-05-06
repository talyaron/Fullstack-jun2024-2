import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {ChatItemProps } from '../../model/Chat';
import { chatItemStyles } from '../../style/Chat';


const ChatItem: React.FC<ChatItemProps> = ({ chatData }) => {
  const { name, lastMessage, timestamp, unreadCount } = chatData;

  return (
    <TouchableOpacity style={chatItemStyles.container} activeOpacity={0.7}>
      <View style={chatItemStyles.avatarPlaceholder} />

      <View style={chatItemStyles.textContainer}>
        <Text style={chatItemStyles.name}>{name}</Text>
        <Text style={chatItemStyles.message} numberOfLines={1}>
          {lastMessage}
        </Text>
      </View>

      <View style={chatItemStyles.metaContainer}>
        <Text style={chatItemStyles.time}>{timestamp}</Text>
        {unreadCount && unreadCount > 0 ? (
          <View style={chatItemStyles.unreadBadge}>
            <Text style={chatItemStyles.unreadCountText}>{unreadCount}</Text>
          </View>
        ) : (
           <View style={{ height: 20 }} />
        )}
      </View>
    </TouchableOpacity>
  );
};


export default ChatItem;