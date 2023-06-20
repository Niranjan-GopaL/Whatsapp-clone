import { View, Text, ImageBackground,FlatList,StyleSheet } from "react-native";
import bg from '../../assets/images/BG.png'
import Message from "../Message";
import messages from '../../assets/data/messages.json'

/*

            You want an image to stay in the background of any component. "sticky"

            ->  <ImageBackground> OUT OF THE BOX IMPLEMENTS IT !!!!!!!!!!!  

*/


const ChatScreen = () => {
  return (
    <ImageBackground  style={styles.container} source={bg}>

        <FlatList 
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={{ padding: 10 }}

        // because we need to render the most recent first.
        inverted
        />

    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({

    container:{
        flex:1
    }



})