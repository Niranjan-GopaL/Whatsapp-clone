import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



import ChatsScreen from "../screens/ChatsScreen";
import NotImplemented from "../screens/NotImplemented";

const Tab = createBottomTabNavigator();


const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Status" component={NotImplemented}/>
        <Tab.Screen name="Calls" component={NotImplemented}/>
        <Tab.Screen name="Camera" component={NotImplemented}/>
        <Tab.Screen name="Chats" component={ChatsScreen}/>
        <Tab.Screen name="Settings" component={NotImplemented}/>
    </Tab.Navigator>
  );
};

export default MainTabNavigator;