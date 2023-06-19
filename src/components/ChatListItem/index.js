
import { View, Text, StyleSheet, Image } from "react-native";
import dayjs from "dayjs";

const ChatListItem = () => {
  return (

    // makes children appear in a single row
    <View style={styles.container}>
      <Image source={{ uri : 'https://media.istockphoto.com/id/1426330507/photo/cute-cat-is-looking-at-the-camera-beautiful-kitten-rests-on-light-fur-cat-close-up-on-a-white.jpg?s=1024x1024&w=is&k=20&c=_tjqK7G265NPfET_h-KMOU4v1x9hWAGXwBxaGK6BoDs='  }} style={styles.image}   />

      <View style={styles.content} >
        <View style={styles.row} >

          <Text  style={styles.name}  numberOfLines={1}>Niranjan</Text>
          <Text>2:30 AM</Text>
          {/* <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text> */}

        </View>

          {/* numberOfLines={1} is SUCH A LIFE SAVER. if text is really long it will be displayed only in one line and and put 3 dots after it */}
          <Text style={styles.subTitle} numberOfLines={1} >World is interesting  </Text>
      </View>

    </View>
  );
};


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
