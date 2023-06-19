import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ChatListItem from './src/components/ChatListItem';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ChatListItem chat={chat} />

    </View>
  );
}

const chat = {
  id: "1",
  user: {
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    name: "Niranjan",
  },
  lastMessage: {
    text: "World is interesting, Don't die cuz of few failures",
    createdAt: "2:30 AM",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
