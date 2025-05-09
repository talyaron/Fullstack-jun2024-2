import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../const/colors';

interface ChatCardProps {
  message: string;
  isUser?: boolean;
  timestamp?: string;
  hasImage?: boolean;
  imageUrl?: string;
  onReply?: () => void;
  onLike?: () => void;
  onDelete?: () => void;
}

const ChatCard: React.FC<ChatCardProps> = ({
  message,
  isUser = false,
  timestamp,
  hasImage = false,
  imageUrl,
  onReply,
  onLike,
  onDelete
}) => {
  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.otherContainer]}>
      {/* Message content */}
      <View style={[styles.messageContainer, isUser ? styles.userMessageContainer : styles.otherMessageContainer]}>
        <Text style={[styles.messageText, isUser ? styles.userMessageText : styles.otherMessageText]}>
          {message}
        </Text>
      </View>

      {/* Image if exists */}
      {hasImage && imageUrl && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      )}

      {/* Actions row */}
      <View style={styles.actionsContainer}>
        {/* User avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {isUser ? '😊' : '🤖'}
            </Text>
          </View>
        </View>

        {/* Reply button */}
        <TouchableOpacity style={styles.actionButton} onPress={onReply}>
          <Image 
            source={require('../../../../assets/favicon.png')} 
            style={styles.actionIcon}
          />
        </TouchableOpacity>

        {/* Like/Stats button */}
        <TouchableOpacity style={styles.actionButton} onPress={onLike}>
          <Image 
            source={require('../../../../assets/favicon.png')} 
            style={styles.actionIcon}
          />
        </TouchableOpacity>

        {/* Delete button */}
        <TouchableOpacity style={styles.actionButton} onPress={onDelete}>
          <Image 
            source={require('../../../../assets/favicon.png')} 
            style={styles.actionIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    maxWidth: '80%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  userContainer: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  otherContainer: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  messageContainer: {
    padding: 12,
    borderRadius: 16,
  },
  userMessageContainer: {
    backgroundColor: colors.QuestionBKG,
  },
  otherMessageContainer: {
    backgroundColor: '#F0F0F0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userMessageText: {
    color: colors.QuestionText,
  },
  otherMessageText: {
    color: '#333333',
  },
  imageContainer: {
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
  },
  actionButton: {
    marginHorizontal: 10,
  },
  actionIcon: {
    width: 20,
    height: 20,
    tintColor: '#999',
  },
});

export default ChatCard;