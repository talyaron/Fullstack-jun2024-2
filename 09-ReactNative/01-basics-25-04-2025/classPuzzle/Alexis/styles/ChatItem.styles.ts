import { StyleSheet } from "react-native";
import { Colors } from "./colors";

const chatItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.surface,
    width: "100%",
    backgroundColor: Colors.background,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.textPrimary,
  },
  message: {
    color: Colors.textPrimary,
  },
  time: {
    color: Colors.textPrimary,
    fontSize: 12,
  },
});

export default chatItemStyles;
