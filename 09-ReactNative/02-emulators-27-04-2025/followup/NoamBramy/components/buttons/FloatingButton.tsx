import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FloatingButtonProps } from '../../model/FloatingButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { buttonStyles } from '../../style/FloatingButton';


const FloatingButton: React.FC<FloatingButtonProps> = ({
  iconName = 'add',
}) => {
  return (
    <TouchableOpacity style={buttonStyles.button}activeOpacity={0.8}>
      <Ionicons name={iconName} size={30} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default FloatingButton;