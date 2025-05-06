import { Feather } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function MiddleNav() {
    return (
        <View style={styles.container}>
             <Text style={styles.header}>Chat's</Text>
             <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search..."
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute', 
       top: 110,
      
    },
    header:{
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        left: 18,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0', 
      borderRadius: 25,
      paddingHorizontal: 15,
      height: 40,
      width: 370,
      margin: 10,
    },
    searchIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: 'black',
    },
});