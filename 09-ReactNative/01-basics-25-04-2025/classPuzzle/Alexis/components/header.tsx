import { Text, TouchableOpacity, View, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import headerStyles from "../styles/Header.styles";
import { Colors } from "../styles/colors";

export const Header: React.FC = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>Chats</Text>
      <View style={headerStyles.icons}>
        <TouchableOpacity style={headerStyles.iconButton}>
          <Ionicons name="search-outline" size={24} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={headerStyles.iconButton}>
          <Ionicons name="ellipsis-vertical" size={24} color={Colors.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;