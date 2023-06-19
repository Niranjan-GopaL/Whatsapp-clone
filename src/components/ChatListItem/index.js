
import { View, Text, StyleSheet, Image } from "react-native";
import dayjs from "dayjs";

const ChatListItem = ({chat}) => {

  // console.log(chat) //<----------NICE

  return (

    // makes children appear in a single row
    <View style={styles.container}>
      <Image source={{ uri : chat.user.image  }} style={styles.image}   />

      <View style={styles.content} >
        <View style={styles.row} >

          <Text  style={styles.name}  numberOfLines={1}> {chat.user.name}     </Text>
          <Text> {chat.lastMessage.createdAt} </Text>
          {/* <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text> */}

        </View>

          {/* numberOfLines={1} is SUCH A LIFE SAVER. if text is really long it will be displayed only in one line and and put 3 dots after it */}
          <Text style={styles.subTitle} numberOfLines={1} > {chat.lastMessage.text}  </Text>
      </View>

    </View>
  );
};


// USE FOR REFERENCE

// const chat = {
//   id: "1",
//   user: {
//     image:
//       "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
//     name: "Lukas",
//   },
//   lastMessage: {
//     text: "Oke",
//     createdAt: "07:30",
//   },
// };


const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',

    // these margins take care of the spacing when
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  content: {

    // SETTING BACKGROUND COLORS ARE A GOOD WAY TO UNDERSTAND WHO IT IS BEING RENDERED
    // backgroundColor:'red',

    // WITHOUT this, content will only be as wide as the container.Now it occupies entire space
    flex: 1,
    
    // this is the bottom silver line (normally we use a div for it, but this is an even cleverer way)
    // we are displaying the bottom part of border and 
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },


  // Name and time needs to be on same row
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },


  name: {
    // this pushes time to one end making name to have as much space as possible
    flex: 1,
    fontWeight: 'bold',
  },

  subTitle: {
    color: 'gray',
  },
});


export default ChatListItem;
