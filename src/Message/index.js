import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);  // relative line is like "3 days ago, 4 hours  ago, 10 mins ago etc"


const Message = ({message}) => {


  const isMyMessage = message.user.id == 'u1'

  return (
    <View style={
      [
          styles.container, // whenever we want to render more than one styles we render them through lists
          {
            backgroundColor: isMyMessage ? '#DCF8C5' : 'white',
            alignSelf: isMyMessage ? 'flex-end' : 'flex-start'
          }
      ]
    }>

      <Text style={styles.message}> {message.text} </Text>
      <Text style={styles.time}> {dayjs(message.createdAt).fromNow(true)} </Text>

    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
    container: {
      margin: 5,
      padding: 10,

      // uncomment one and see what happens. 
      // This is the property that will differentiate message that we send and they send. 
      // alignSelf: 'flex-start',
      // alignSelf: 'flex-end',

      borderRadius: 10,

      // this makes the messages only take 80% of the row space.
      //  gives it a left aligned effect
      maxWidth: "80%",
  
      // Shadows
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
  
      elevation: 1,
    },

    message: {
        // color: 'red'
    },

    time: {
      alignSelf: "flex-end",
      color: "grey",
    },
  });