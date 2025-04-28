import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function Bottom() {
  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        <MaterialIcons name="settings" size={28} color="gray" />
        <Text style={styles.iconText}>Settings</Text>
      </View>
      
  
      <View style={styles.iconContainer}>
        <MaterialIcons name="chat" size={28} color="gray" />
        <Text style={styles.iconText}>Chats</Text>
      </View>
      
      
      <View style={styles.iconContainer}>
        <MaterialIcons name="group" size={28} color="gray" />
        <Text style={styles.iconText}>Community</Text>
      </View>

    
      <View style={styles.iconContainer}>
        <MaterialIcons name="call" size={28} color="gray" />
        <Text style={styles.iconText}>Calls</Text>
      </View>

     
      <View style={styles.iconContainer}>
        <MaterialIcons name="update" size={28} color="gray" />
        <Text style={styles.iconText}>Updates</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    zIndex: 10,

  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: 'gray',
  },
});
