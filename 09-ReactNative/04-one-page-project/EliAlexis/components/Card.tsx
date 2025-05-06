import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../styles/colors";

interface ActivityCardProps {
  title: string;
  subtitle: string;
  stars: number;
  duration: string;
  timerValue: string;
  backgroundColor: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  subtitle,
  stars,
  duration,
  timerValue,
  backgroundColor,
}) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.stats}>
        <FontAwesome name="star-o" size={12} color={Colors.surface} />
        <Text style={styles.statText}>{stars}</Text>
        <FontAwesome name="clock-o" size={12} color={Colors.surface} style={styles.iconSpacing} />
        <Text style={styles.statText}>{duration}</Text>
      </View>

      <Text style={styles.timerLabel}>Timer</Text>
      <Text style={styles.timerValue}>{timerValue}</Text>
      <Text style={styles.timerUnit}>Min</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    borderRadius: 18,
    padding: 16,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    color: Colors.surface,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 14,
    color: Colors.surface,
    marginBottom: 8,
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  statText: {
    fontSize: 12,
    color: Colors.surface,
    marginLeft: 4,
    marginRight: 10,
  },
  iconSpacing: {
    marginLeft: 4,
  },
  timerLabel: {
    fontSize: 12,
    color: Colors.surface,
    marginBottom: 4,
  },
  timerValue: {
    fontSize: 32,
    color: Colors.surface,
    fontWeight: "bold",
    lineHeight: 36,
  },
  timerUnit: {
    fontSize: 12,
    color: Colors.surface,
  },
});

export default ActivityCard;
