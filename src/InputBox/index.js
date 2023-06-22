import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

// import { SafeAreaView } from ''react-native-SafeAreaView'
import { SafeAreaView } from 'react-native';


const InputBox = () => {

  // HOW TO GET THE data from user >> States !!!
  // Whenver a state variable changes, react RE-RENDERS THE ENTIRE PAGE!!
  const [newMessage, setNewMessage] = useState('');
  // we update using the setter value - setNewMessage



  const onSend = () => {

    // IT'S CONSOLE.WARN
    console.warn('Sending a new message: ', newMessage);
    console.log('Sending a new message: ', newMessage);

    // this is used to update the value of newMessage to empty string 
    // so now after we click send ->  console.warns -> the field is changed to '' 
    setNewMessage('');

    // try uncommenting this and see what happens
    // setNewMessage('THIS IS THE NEW VAL');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>

      {/* Icon */}
      <AntDesign name="plus" size={20} color="royalblue" />

      {/* Text Input */}
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="type your message..."
      />

      {/* Icon */}
      {/* onPress we'll send the data to the function "send data". we can bind the event "pressing send" to a function */}
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,


    // THIS WAS SOOOOO FUCKING FUNNNN !!!!!
    fontSize: 50

  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default InputBox;