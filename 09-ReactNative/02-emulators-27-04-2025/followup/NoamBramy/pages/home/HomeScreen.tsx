import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { Chat, ChatData } from '../../model/Chat'; 
import AppHeader from '../../components/app/AppHeader'; 
import TabBar from '../../components/buttons/TabBar';
import ChatList from '../../components/chat/ChatList';
import FloatingButton from '../../components/buttons/FloatingButton'; 
import { homeStyles } from '../../style/HomeScreen';


const HomeScreen = () => {
  const chats: Chat[] = ChatData;
  const visualActiveTab = 'Chats';
  const TABS = ['Chats', 'Status', 'Calls'];

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={'#007AFF'} />
      <View style={homeStyles.container}>
        <AppHeader title="Noam Chat" />
        <TabBar
          tabs={TABS}
          activeTab={visualActiveTab}
        />
        <ChatList
          chats={chats}
        />

        <FloatingButton
          iconName="chatbubble-ellipses-outline"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;