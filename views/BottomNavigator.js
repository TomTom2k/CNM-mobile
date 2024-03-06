import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import ChatDetail from './onHome/ChatDetail'

//screens
import Chat from "./onHome/ChatView";
import Contact from "./onHome/ContactView";
import Note from "./onHome/NoteView";
import Account from "./onHome/AccountView";

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
const Stack = createStackNavigator();
// const ChatStack = () => {
//   return(
//     <Stack.Navigator>
//     <Stack.Screen name="Chat" component={Chat} options={{headerShown:false}}/>
    
//   </Stack.Navigator>
//   )
// }
// const ContactStack = () => {
//   return(
//     <Stack.Navigator>
//     <Stack.Screen name="Contact" component={Contact}  options={{headerShown:false}} />

//   </Stack.Navigator>
//   )
 
// }
// const NoteStack = () => {
//   return(
//     <Stack.Navigator>
//     <Stack.Screen name="Note" component={Note}  options={{headerShown:false}} />
    
//   </Stack.Navigator>
//   )
// }
// const AccountStack = () => {
//   return(
//     <Stack.Navigator>
//     <Stack.Screen name="Account" component={Account}  options={{headerShown:false}}/>
   
//   </Stack.Navigator>
//   )
// }

  return (
    
    
      <Tab.Navigator 
        initialRouteName="Tin nhắn"
        screenOptions={({route}) =>({
          tabBarIcon: ({focused, color}) =>{
            let iconName;
            if(route.name === 'Tin nhắn'){
              iconName = focused ? 'chatbox' : 'chatbox-outline'
            }else if(route.name === 'Danh bạ'){
              iconName = focused ? 'people' : 'people-outline'
            }else if(route.name === 'Nhật ký'){
              iconName = focused ? 'time' : 'time-outline'
            }else if(route.name === 'Cá nhân'){
              iconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={iconName} size={24} color={color} />
          },
          tabBarLabel: ({focused, color}) => {
          if (focused) {
            return <Text style={{color: color}}>{route.name}</Text>;
          }
          return null;
        }
        })}
        lazy={false}
      >
        <Tab.Screen name="Tin nhắn" component={Chat}   options={{headerShown:false}}/>
        <Tab.Screen name="Danh bạ" component={Contact}  options={{headerShown:false}}/>
        <Tab.Screen name="Nhật ký" component={Note} options={{headerShown:false}}/>
        <Tab.Screen name="Cá nhân" component={Account}  options={{headerShown:false}}/>
      </Tab.Navigator>
 
  )
}

export default BottomNavigator