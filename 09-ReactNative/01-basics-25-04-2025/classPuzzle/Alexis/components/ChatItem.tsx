import { View, Text, Image } from "react-native";
import chatItemStyles from "../styles/chatItem.styles";

const ChatItem = ({ name, message, time, avatar }: any) => {
  return (
    <View style={chatItemStyles.container}>
      <Image source={{ uri: avatar }} style={chatItemStyles.avatar} />
      <View style={chatItemStyles.textContainer}>
        <Text style={chatItemStyles.name}>{name}</Text>
        <Text style={chatItemStyles.message}>{message}</Text>
      </View>
      <Text style={chatItemStyles.time}>{time}</Text>
    </View>
  );
};

export default ChatItem;
