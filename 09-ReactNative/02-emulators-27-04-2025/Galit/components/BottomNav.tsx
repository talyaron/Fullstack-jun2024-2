import { StyleSheet, View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [
        styles.filter,
        pressed && styles.filterPressed
      ]}>
        <Text style={styles.filterText}>All</Text>
      </Pressable>

      <Pressable style={({ pressed }) => [
        styles.filter,
        pressed && styles.filterPressed
      ]}>
        <Text style={styles.filterText}>Unread</Text>
      </Pressable>

      <Pressable style={({ pressed }) => [
        styles.filter,
        pressed && styles.filterPressed
      ]}>
        <Text style={styles.filterText}>Groups</Text>
      </Pressable>

      <Pressable style={({ pressed }) => [
        styles.filter,
        pressed && styles.filterPressed
      ]}>
        <Text style={styles.filterText}>Favorites</Text>
      </Pressable>

      <View style={styles.iconCirclePlus}>
        <MaterialIcons name="add" size={28} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 190,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: 100,
    zIndex: 10,
  },
  filter: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    height: 40,
    width: 70,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterHover: {
    backgroundColor: 'green',
  },
  filterPressed: {
    backgroundColor: 'lightgreen',
  },
  
  filterText: {
    textAlign: 'center',
    
  },
  iconCirclePlus: {
    backgroundColor: '#e7e7e7',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
