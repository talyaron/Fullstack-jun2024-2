import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/headerS';




export default function Header() {
    return (
      <View style={styles.container}>
        <View style={styles.topRight}>
          <Image
              source={require('../../../assets/more.png')} 

            style={styles.moreIcon}
          />
        </View>
  
        <Image
          source={require('../../../assets/avatar.jpeg')}
          style={styles.avatar}
        />
  
        <Text style={styles.name}>Lilya</Text>
      </View>
    );
  }
  

