import ChatListItem from "../components/ChatListItem";


const chat = {
    id: "1",
    user: {
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
      name: "Niranjan",
    },
    lastMessage: {
      text: "World is interesting, Don't die cuz of few failures",
      createdAt: "2:30 AM",
    },
  };
  

const ChatsScreen = () => {
  return <ChatListItem chat={chat} />;
};

export default ChatsScreen;