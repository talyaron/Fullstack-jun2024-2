import { StyleSheet, View, Text, FlatList, Image } from 'react-native';


const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Isaac', 'Julia', 'Kevin', 'Lily', 'Mike', 'Nina', 'Oscar'];
const messages = [
    'Hey! It’s been so long since we last talked. How have you been?',
    'Just wanted to check in and see how your day is going!',
    'Don’t forget about our meeting tomorrow at 10 AM. See you there!',
    'I saw this really cool article today and thought you’d love it too.',
    'What’s your plan for the weekend? Let’s catch up if you’re free!',
    'Good morning! Wishing you a productive and positive day ahead.',
    'Can you send me the notes from yesterday’s class when you have a chance?',
    'Thank you so much for helping me out yesterday. I owe you one!',
    'I’m almost at your place. Just stuck in a bit of traffic.',
    'That movie you recommended was amazing! Let’s watch another one soon.',
    'I can’t believe how fast this week has gone by!',
    'I have some exciting news to share with you. Call me when you’re free!',
    'Are you free tonight for a quick video call?',
    'Sorry, I completely forgot to reply earlier. Hope everything’s good!',
    'Sending you lots of good vibes and positive energy today!'
  ];

  type ChatItem = {
    id: string;
    name: string;
    message: string;
    time: string;
    image: string;
  };
  
  const chatData: ChatItem[] = [];
  
for (let i = 0; i < 20; i++) {
  const gender = i % 2 === 0 ? 'men' : 'women';
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  const randomHour = Math.floor(Math.random() * 12) + 1;  
  const randomMinute = Math.floor(Math.random() * 60).toString().padStart(2, '0'); 
  const amPm = Math.random() > 0.5 ? 'AM' : 'PM';
  
  const randomTime = `${randomHour}:${randomMinute} ${amPm}`;

  chatData.push({
    id: (i + 1).toString(),
    name: randomName,
    message: randomMessage,
    time: randomTime,
    image: `https://randomuser.me/api/portraits/${gender}/${i}.jpg`,
  });
}


export default function Chat() {
  return (
    <View style={styles.container}>
     <FlatList
    data={chatData}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 20 }}
    renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <View style={styles.containerImg}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 270,
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
 

  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  containerImg: {
    marginRight: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#555',
    fontSize: 14,
    marginRight: 50,
  },
  time: {
    color: '#999',
    fontSize: 12,
  },
});