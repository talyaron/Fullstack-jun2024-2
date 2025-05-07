import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors } from '../../const/colors';
import { fontSize } from '../../const/fonts';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function TopNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Menu pressed')}>
        <Ionicons name="menu-outline" size={24} color={colors.QuestionText} />
      </TouchableOpacity>
      
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Settings pressed')}>
              <MaterialCommunityIcons name="bell-outline" size={24} color={colors.QuestionText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Settings pressed')}>
              <Ionicons name="chatbubble-outline" size={24} color={colors.QuestionText} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Notifications pressed')}>
              <Ionicons name="home-outline" size={24} color={colors.QuestionText} />
          </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Settings pressed')}>
        <Ionicons name="settings-outline" size={24} color={colors.QuestionText} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.QuestionBKG,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomRightRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: '100%',
    },
    text: {
        color: colors.QuestionText,
        fontSize: fontSize.h1,
        fontWeight: 'bold',
    },
    iconButton: {
        padding: 8,
        borderRadius: 20,
    },
});
