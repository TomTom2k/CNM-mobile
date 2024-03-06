import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, {useState, useEffect}from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ChatInput = () => {
    const [message, setMessage] = useState('');
  return (
    <View style = {styles.container}>
       <View style = {styles.innerContainer}>
            <View style = {styles.inputAndMicrophone}>
                <TouchableOpacity
                    style = {styles.emotionButton}
                >
                <MaterialCommunityIcons name="emoticon-outline" size={24} color="black" />
                  
                </TouchableOpacity>
                <TextInput
                        multiline
                        placeholder="Type a message"
                        style = {styles.input}
                        onChangeText={text => setTe}
                    ></TextInput>
                <TouchableOpacity
                style = {styles.rightIconButtonStyle}
                >
                   <Feather name="paperclip" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                >
                   <Feather name="image" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.sendButton}>
            <MaterialCommunityIcons  name={message ? "send": "microphone"} size={24} color="black" />
            </TouchableOpacity>
       </View>
     
    </View>
  )
}

export default ChatInput
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: "white",
    },
    innerContainer:{
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row",
        paddingVertical:10
    },
    inputAndMicrophone:{
        flexDirection:"row",
        backgroundColor: "#f0f0f0",
        flex: 3,
        marginRight: 10,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-between",
    },
    input:{
        backgroundColor: "transparent",
        paddingLeft: 20,
        color: "black",
        flex: 3,
        height: 50,
        fontSize: 15,
        alignSelf: "center",
    },
    rightIconButtonStyle:{
        justifyContent:"center",
        alignItems:"center",
        paddingRight: 15,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#fff",
    },
    emotionButton:{
        justifyContent:"center",
        alignItems:"center",
        paddingLeft: 10,
        
    },
    sendButton:{
        backgroundColor: "blue",
        borderRadius: 50,
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center"
    }
   

});