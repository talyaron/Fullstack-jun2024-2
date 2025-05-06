import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { headerStyles } from '../../style/AppHeader';
import { AppHeaderProps } from '../../model/AppHeader';


const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
      <View style={headerStyles.icons}>
        <TouchableOpacity style={headerStyles.iconButton}>
          <Ionicons name="search-outline" size={24} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={headerStyles.iconButton}>
          <Ionicons name="ellipsis-vertical" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;