import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './src/Navigation';
import ChatScreen from './src/screens/ChatScreen';
import ChatsScreen from './src/screens/ChatsScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <ChatsScreen /> */}
      {/* <ChatScreen /> */}
      <Navigator />

    </View>
  );
}

// const chat = {
//   id: "1",
//   user: {
//     image:
//       "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
//     name: "Niranjan",
//   },
//   lastMessage: {
//     text: "World is interesting, Don't die cuz of few failures",
//     createdAt: "2:30 AM",
//   },
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // This is what made flatlist item aligned in center
    // alignItems: 'center',

    justifyContent: 'center',

    // This is what you need to do, if your notch is getting in the way. FOR NOW !!
    // once we build the navigation library it'll be fine
    paddingTop: 30

  },
});
