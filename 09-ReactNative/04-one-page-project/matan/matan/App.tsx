import React from 'react';
import { View } from 'react-native';
import Header from './view/components/header/Header';
import Center from './view/components/Center/Center';
import TransactionList from './view/components/Transfer/Transfer';
import Footer from './view/components/footer/footer';

export default function App() {
  return (
    <View>
      <Header />
      <Center />
      <TransactionList />
      <Footer />
    </View>
  );
}
