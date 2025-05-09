import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/footerS';

const Footer = () => {
    return (
      <View style={styles.container}>
        <FontAwesome name="home" size={20} style={styles.activeIcon} />
        <FontAwesome name="check-circle" size={20} style={styles.icon} />
        <FontAwesome name="bookmark" size={20} style={styles.icon} />
        <FontAwesome name="gear" size={20} style={styles.icon} />
      </View>
    );
  };
  
  export default Footer;