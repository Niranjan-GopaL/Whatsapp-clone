import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../screens/ChatScreen";
import ChatsScreen from "../screens/ChatsScreen";


/*

---------------::   STACK NAVIGATOR  ::------------------------------

        we use Stack navigator :-

    - each screen is added to a stack when user triggers it
    - and when the user goes back that screen is popped off
    - there are some transitioning animation
    - behind the scenes the actual Stack Data structure stores a 
      lot of stuff including the path, and other metadata


*/



// Stack OBJECT!!!
const Stack = createNativeStackNavigator();


// We need to wrap all our screens with Navigator component
const Navigator = () => {
  return (

    // we use Stack navigator :-
    <NavigationContainer>

      <Stack.Navigator 
        // initialRouteName="Chat" // this is used to set initial screen that needs to be displayed
        screenOptions={{ headerStyle: { backgroundColor: 'whitesmoke' } 
      }}>

        {/* requires two props :- name and component                   */}
        {/* <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        {/* <Stack.Screen name="Contacts" component={ContactsScreen} /> */}

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigator;
