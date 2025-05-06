import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabBarProps } from '../../model/TabBar';
import { tabBarStyles } from '../../style/TabBar';

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab }) => {
  return (
    <View style={tabBarStyles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            tabBarStyles.tabButton,
            activeTab === tab && tabBarStyles.activeTabButton,
          ]}
        >
          <Text
            style={[
              tabBarStyles.tabText,
              activeTab === tab && tabBarStyles.activeTabText,
            ]}
          >
            {tab.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default TabBar;