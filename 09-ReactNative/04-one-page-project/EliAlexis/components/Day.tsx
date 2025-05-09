// components/WeekCalendar.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DayItem } from "../styles/DayItemStyle";

const days = [
  { label: "M", date: 18 },
  { label: "T", date: 19 },
  { label: "W", date: 20 },
  { label: "T", date: 21 },
  { label: "F", date: 22 },
  { label: "S", date: 23 },
];

const Day = () => {
  return (
    <View style={DayItem.container}>
      <View style={DayItem.day}>
        <Text style={DayItem.date}>17</Text>
        <Text style={DayItem.label}>S</Text>
      </View>
      {days.map((day, index) => (
        <View key={index} style={DayItem.overall}>
          <Text>{day.date}</Text>
          <Text style={DayItem.label}>{day.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default Day;
