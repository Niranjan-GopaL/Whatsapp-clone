import { View, Text, ImageBackground,FlatList } from "react-native";
import bg from '../../assets/images/BG.png'
import Message from "../Message";
import messages from '../../assets/data/messages.json'

/*

            You want an image to stay in the background of any component. "sticky"

            ->  <ImageBackground> OUT OF THE BOX IMPLEMENTS IT !!!!!!!!!!!  

*/


const ChatScreen = () => {
  return (
    <ImageBackground source={bg}>
        <FlatList 
        
        renderItem={{}}
        />
    </ImageBackground>
  );
};

export default ChatScreen;
