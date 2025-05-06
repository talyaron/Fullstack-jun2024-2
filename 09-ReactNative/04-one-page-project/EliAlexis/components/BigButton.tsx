import { StyleSheet, Text, Pressable } from "react-native";

const BigButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>▶ Start</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    top: 160,
    position: "relative",
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default BigButton;
