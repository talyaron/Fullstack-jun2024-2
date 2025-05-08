import { StyleSheet, Text, Pressable } from "react-native";
type Props = {
  onPress: () => void;
};

const BigButton = ({ onPress }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
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
    top: 150,
    position: "relative",
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  backBtn: {
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: 50,

    width: 100,
    height: 40,
  },
  backBtnHovered: {
    transform: [{ scale: 1.1 }],
  },
});

export default BigButton;
