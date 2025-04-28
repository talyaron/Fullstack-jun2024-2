import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ChatRoomProps {
  name: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ name }) => {
  return (
    <View style={styles.continer}>
        <View>
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/ff/82/b6/ff82b607537ed90b2f343c643960acfa.jpg' }}
        style={styles.avatar} 
      />
      </View>
      <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>hey there, how are you?</Text>
      </View>
      <View>
      <Text>5.4.2024</Text>
      <Text>4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    continer:{
    flex: 0,
    flexDirection: 'row',
    marginBottom: 10,
    },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25, // אם תרצה תמונה עגולה
  },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10, // מרווח בין התמונה לשם
    },
    text: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10, // מרווח בין התמונה לשם
    },
});

export default ChatRoom;