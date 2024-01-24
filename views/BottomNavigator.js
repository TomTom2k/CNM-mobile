import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

//screens
import Chat from "./onHome/ChatView";
import Contact from "./onHome/ContactView";
import Note from "./onHome/NoteView";
import Account from "./onHome/AccountView";

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    
  
      <Tab.Navigator 
        initialRouteName={Chat}
        screenOptions={({route}) =>({
          tabBarIcon: ({focused, color, size}) =>{
            let iconName;
            if(route.name === 'Chat'){
              iconName = focused ? 'chatbox' : 'chatbox-outline'
            }else if(route.name === 'Contact'){
              iconName = focused ? 'people' : 'people-outline'
            }else if(route.name === 'Note'){
              iconName = focused ? 'time' : 'time-outline'
            }else if(route.name === 'Account'){
              iconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Chat" component={Chat} options={{headerShown:false}}/>
        <Tab.Screen name="Contact" component={Contact} options={{headerShown:false}}/>
        <Tab.Screen name="Note" component={Note} options={{headerShown:false}}/>
        <Tab.Screen name="Account" component={Account} options={{headerShown:false}}/>
      </Tab.Navigator>
 
  )
}

export default BottomNavigator