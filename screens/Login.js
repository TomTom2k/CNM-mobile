import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import SlideShow from '../views/SlideShow'
import { LinearGradient } from 'expo-linear-gradient'


const Login = () => {
    return (
        <View style={styles.container}>

            <View style={{ height: 70, justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require("../images/zlogo.png")}
                    style={{ height: 60, width: 100 }}
                    resizeMode='contain'
                ></Image>
            </View>
            <View style={{ flex: 5 }}>
                <SlideShow />
            </View>

            <View style={{ flex: 2, flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: 10 }}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{ height: 50, width: 250, borderRadius: 20 }}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                >
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Đăng Nhập</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity
                    style={{ height: 50, width: 250, borderRadius: 20, backgroundColor: "#00a3ff", justifyContent:"center", alignItems:"center" }}
                >
                    <Text>Đăng Ký</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>

                <TouchableOpacity>
                    <Text>Tiếng Việt</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>English</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})