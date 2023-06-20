import { View, Text, StyleSheet } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);  // relative line is like "3 days ago, 4 hours  ago, 10 mins ago etc"


const Message = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}> 
        {message.text}
       </Text>

      <Text style={styles.time}> 
        {message.createdAt}
       </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
    container: {
      margin: 5,
      padding: 10,
      borderRadius: 10,
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

    message: {},

    time: {
      alignSelf: "flex-end",
      color: "grey",
    },
  });