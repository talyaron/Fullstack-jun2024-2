import { FC } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
interface TransparentCompProps {
  word: string;
}
const TransparentComp: FC<TransparentCompProps> = ({ word }) => {
  return (
    <Pressable
      style={({ pressed }: any) => [
        styles.TransparentComp,
        pressed && styles.TransparentCompHover,
      ]}
    >
      <Text>#{word}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  TransparentComp: {
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignSelf: "flex-start",
    padding: 6,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 10,
    transform: [{ scale: 1 }],
  },
  TransparentCompHover: {
    transform: [{ scale: 1.1 }],
  },
});
export default TransparentComp;
