import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Day from './components/Day';
import ActivityCard from './components/Card';
export default function App() {
  return (
    <View >
      <Day />
      <ActivityCard
          title="10 min"
          subtitle="meditation"
          stars={13}
          duration="4 h"
          timerValue="10"
          backgroundColor="#C89B6C"
        />
    </View>
  );
}

