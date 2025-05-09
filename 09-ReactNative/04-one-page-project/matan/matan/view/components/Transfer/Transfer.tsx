import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../styles/TransferS'; 


interface Transaction {
    id: number;
    type: 'plus' | 'arrow-up' | 'arrow-down';
    title: string;
    time: string;
    amount: string;
    isPositive: boolean;
  }
  
  const transactions: Transaction[] = [
    { id: 1, type: 'plus', title: 'Completed task', time: '12:09 PM', amount: '$20', isPositive: true },
    { id: 2, type: 'arrow-up', title: 'To Elvis Krueger', time: '09:32 AM', amount: '-$280', isPositive: false },
    { id: 3, type: 'arrow-down', title: 'From Carla Septimus', time: '12:02 PM', amount: '$64', isPositive: true },
  ];
  
  const TransactionList = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Transactions</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
  
        {transactions.map((tx) => (
          <View key={tx.id} style={styles.item}>
            <View style={styles.iconBox}>
              <FontAwesome name={tx.type} size={18} color="#000" />
            </View>
            <View style={styles.details}>
              <Text style={styles.name}>{tx.title}</Text>
              <Text style={styles.time}>{tx.time}</Text>
            </View>
            <Text style={tx.isPositive ? styles.positive : styles.negative}>{tx.amount}</Text>
          </View>
        ))}
      </View>
    );
  };
  
  export default TransactionList;