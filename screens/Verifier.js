import {StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'

const Verifier = ({navigation}) => {
  return (
    <View style = {styles.container}>
    <View style = {styles.otpContainer}>
        <View style = {styles.otpBox}>
            <TextInput style = {styles.otpText} />
        </View>
        <View style = {styles.otpBox}>
            <TextInput style = {styles.otpText} />
        </View>
        <View style = {styles.otpBox}>
            <TextInput style = {styles.otpText}/>
        </View>
        <View style = {styles.otpBox}>
            <TextInput style = {styles.otpText}/>
        </View>
    </View>
    </View>
  )
}

export default Verifier

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    otpContainer:{
        marginHorizontal:20,
        marginBottom:20,
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
    },
    otpBox:{
        borderRadius: 5,
        borderColor: "#000",
        borderWidth: 0.5,
        width: '20%',

    },
    otpText:{
        fontSize: 25,
        color: "red",
        padding: 0,
        textAlign:"center",
        paddingHorizontal: 10, 
        paddingVertical: 5,
    }

})