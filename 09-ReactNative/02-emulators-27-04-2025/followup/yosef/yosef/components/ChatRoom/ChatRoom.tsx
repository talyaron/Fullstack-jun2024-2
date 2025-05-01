import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ChatRoomProps {
  name: string;
  date?: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ name,date }) => {
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
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center',paddingRight: 20 }}>
      <Text>{date}</Text>
      <Text style={styles.meesageUnread}>7</Text>
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
    meesageUnread: {
      right: -160,
      flex: 1, alignItems: 'flex-end', justifyContent: 'center',
      backgroundColor: "green",
      alignSelf: "flex-start",
      color: "white",
      fontSize: 14, // Increased font size
      fontWeight: "bold",
      textAlign: "center",
      minWidth: 20, // Set a minimum width for the circle
      height: 40, // Keep height fixed
      borderRadius: 20, // Half of height to make it circular
      lineHeight: 40, // Align text vertically
      paddingHorizontal: 10, // Add padding to adjust for larger numbers
    },
});

export default ChatRoom;