import { ScrollView, View } from "react-native";
import ChatItem from "../components/chatItem";
import mainStyles from "../styles/MainPage.styles";
import Header from "../components/header";

const dummyChats = [
  {
    name: "Alice",
    message: "Hey there!",
    time: "10:45",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Bob",
    message: "How's it going?",
    time: "9:30",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Charlie",
    message: "Wanna meet later?",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export const MainPage = () => {
  return (
    <View style={mainStyles.container}>
      <Header />
      <ScrollView style={{ width: "100%" }}>
        {dummyChats.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </ScrollView>
    </View>
  );
};
