import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

import ChatListItem from './src/components/ChatListItem';


export default function App() {
  return (
    <View >
      <Text>Hello world . Please work  </Text>
      <ChatListItem />
    </View>
  );
}
