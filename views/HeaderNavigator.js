import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
const HeaderNavigator = ({ navigation }) => {
  return (
    <LinearGradient
      // Array of colors for gradient effect
      colors={['#247bfe', '#139afc', '#02b9fa']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ height: 60, justifyContent: 'center', paddingHorizontal: 10 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder='Tìm kiếm'
          style={{ height: 40, borderWidth: 0, width: 300, color: 'white' }}
          placeholderTextColor='white'
        />
        <TouchableOpacity>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>

    </LinearGradient>
  )
}

export default HeaderNavigator