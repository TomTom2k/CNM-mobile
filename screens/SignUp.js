import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 5, margin: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                    placeholder='nhập họ'
                        style={{ height: 40, width: 350, borderColor: 'gray', backgroundColor: 'white', borderWidth: 0, borderBottomWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}

                    ></TextInput>
                    <AntDesign name="close" size={24} color="black"

                        style={{ position: 'absolute', right: 25, top: 10 }}
                    />

                </View>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                    placeholder='nhập tên'
                        style={{ height: 40, width: 350, borderColor: 'gray', backgroundColor: 'white', borderWidth: 0, borderBottomWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}

                    ></TextInput>
                    <AntDesign name="close" size={24} color="black"

                        style={{ position: 'absolute', right: 25, top: 10 }}
                    />

                </View>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                    placeholder='nhập số điện thoại'
                        style={{ height: 40, width: 350, borderColor: 'gray', backgroundColor: 'white', borderWidth: 0, borderBottomWidth: 1 }}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}

                    ></TextInput>
                    <AntDesign name="close" size={24} color="black"

                        style={{ position: 'absolute', right: 25, top: 10 }}
                    />

                </View>
                
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                    placeholder='nhập mật khẩu'
                        style={{ height: 40, width: 350, borderColor: 'gray', backgroundColor: 'white', borderWidth: 0, borderBottomWidth: 1, borderBottomColor: "#eeeeee" }}
                    // onChangeText={text => onChangeText(text)}
                    // value={value}

                    ></TextInput>
                    <AntDesign name="eye" size={24} color="black"

                        style={{ position: 'absolute', right: 25, top: 10 }}
                    />

                </View>
                
            </View>
            <View style={{ height: 200 }}></View>
            <View style={{ justifyContent: "space-between", flexDirection: "row", height: 100 }}>
                <Text></Text>
                <TouchableOpacity style={styles.button_arrow}
                    onPress={() => { navigation.navigate('Welcome') }}
                >

                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    button_arrow: {
        backgroundColor: '#06b2fc',
        borderRadius: "70%",
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
})