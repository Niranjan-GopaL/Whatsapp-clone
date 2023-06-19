import { View, Text, StyleSheet, Image } from "react-native";
import dayjs from "dayjs";

const ChatListItem = () => {
  return (
    <View>
      {/* <Text>ChatListItem what up</Text> */}
      <Image source={{ uri : 'https://media.istockphoto.com/id/1426330507/photo/cute-cat-is-looking-at-the-camera-beautiful-kitten-rests-on-light-fur-cat-close-up-on-a-white.jpg?s=1024x1024&w=is&k=20&c=_tjqK7G265NPfET_h-KMOU4v1x9hWAGXwBxaGK6BoDs='  }} style={styles.image}   />

      <View>
        <View >

          <Text  numberOfLines={1}>UserName</Text>
          <Text>Date and Time</Text>
          {/* <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text> */}

        </View>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});


export default ChatListItem;
