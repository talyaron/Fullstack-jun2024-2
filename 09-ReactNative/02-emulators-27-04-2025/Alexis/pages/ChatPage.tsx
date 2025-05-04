import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatPage = ({ route }: any) => {
  const { chatName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with {chatName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20 },
});

export default ChatPage;
