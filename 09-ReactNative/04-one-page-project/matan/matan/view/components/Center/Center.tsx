import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/mainS';

const Center = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../../assets/notifications.png')} style={styles.icon} />
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.subtitle}>Alert settings</Text>
      </View>

      <View style={styles.card}>
      <Image source={require('../../../assets/check.png')} style={styles.iconTwo} />
        <Text style={styles.title}>Permissions</Text>
        <Text style={styles.subtitle}>Access control</Text>
      </View>
    </View>
  );
};

export default Center;
