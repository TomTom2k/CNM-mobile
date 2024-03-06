import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import ChatView from "./ChatView";

import HeaderChat from "../HeaderChat";
import ChatInput from "../onHome/ChatInput";
import MessageScreen from "../onHome/MessagesList";
import { HeaderNavigator } from "../HeaderNavigator";

const ChatDetail = ({navigation}) => {
    return (
        <View style ={styles.container}>
           <HeaderChat navigation={navigation}/>
            <MessageScreen />
            <ChatInput />
           
        </View>
    )
}

export default ChatDetail
const styles = StyleSheet.create({
    container: {
        
    },
});