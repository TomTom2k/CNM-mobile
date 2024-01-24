import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Verifier from "./screens/Verifier";
import HeaderNavigator from "./views/HeaderNavigator";
import { AntDesign } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

// import BottomNavigator from './views/BottomNavigator';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Đăng nhập",  }} />
        <Stack.Screen name="Verifier" component={Verifier} options={{ title: "mã OTP",  }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Đăng ký",  }} />
        <Stack.Screen name="Home" component={Home} options={
          {
            header: () => <HeaderNavigator />
          //  headerTitle: ()  =><HeaderNavigator name ="home"/>,
          //  headerLeft:() =>(
          //   <View>
          //     <TouchableOpacity>
          //     <AntDesign name="search1" size={24} color="black" />
          //     </TouchableOpacity>
          //   </View>
          //  ),
          //  headerRight: () => (
          //   <View>
          //     <TouchableOpacity>
          //     <AntDesign name="plus" size={24} color="black" />
          //     </TouchableOpacity>
          //   </View>
            
          //  ),
          //  headerStyle:{
          //     height: 60,

          //  }
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>

  )
}