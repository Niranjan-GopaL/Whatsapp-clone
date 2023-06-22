import { ImageBackground,FlatList,StyleSheet,KeyboardAvoidingView } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import { useEffect } from "react";

import bg from '../../assets/images/BG.png'
import Message from "../Message/Message";
import messages from '../../assets/data/messages.json'
import InputBox from "../InputBox";

/*

            You want an image to stay in the background of any component. "sticky"

            ->  <ImageBackground> OUT OF THE BOX IMPLEMENTS IT !!!!!!!!!!!  

*/


const ChatScreen = () => {

  // everytime user presses on ChatListItem, we were sending some information to the ChatScreen component.
  // THIS IS HOW WE ACCESS THEM
  const route = useRoute();
  console.log(route) // <------------- WE GET DATA FROM OTHER ROUTES


  // we set the title of the page using useNavigation
  const navigation = useNavigation();
  navigation.setOptions({title: route.params.name})
  
  
  useEffect(() => {
    navigation.setOptions({title: route.params.name});
  } ,[route.params.name]);

  
  return (
    
    // SO in iOS Whenevver the keyboard comes up, it'll hinder the InputTexBox
    //  By using this component it won't happen (SCREEN IS PUSHED UP)
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
    >

    <ImageBackground  style={styles.bg} source={bg}>

        <FlatList 
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={{ padding: 10 }}

        // because we need to render the most recent first.
        inverted
        />

        <InputBox /> 
        
    </ImageBackground>
    </KeyboardAvoidingView>
    
  );
};

export default ChatScreen;

const styles = StyleSheet.create({

    // container:{
    //     flex:1
    // },
    bg: {
      flex: 1,
    },
    list: {
      padding: 10,
    },

})