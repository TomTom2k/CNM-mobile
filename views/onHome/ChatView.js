import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { Avatar, Badge, Card, Divider, Button } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { readUser } from "../userSlice";
import { useDispatch, useSelector } from "react-redux"
const ChatView = ({ navigation, route }) => {
  const list = [
    {
      id: 1,
      name: 'John',
      image: require("../image_view/avtchat_01.jpg"),
      message: 'Hello, how are you?'
    },
    {
      id: 2,
      name: 'Bob',
      message: 'I am good, thank you.',
      image: require("../image_view/avtchat_02.jpg"),

    },
    {
      id: 3,
      name: "Jack",
      image: require("../image_view/avtchat_03.jpg"),
      message: 'Where are you now?'
    },
    {
      id: 4,
      name: "Conor",
      image: require("../image_view/avtchat_04.jpg"),
      message: 'I am in the office.'
    },
    {
      id: 5,
      name: "Khabib",
      image: require("../image_view/avtchat_05.jpg"),
      message: 'I am in the office.'
    },
    {
      id: 6,
      name: "Anable",
      image: require("../image_view/avtchat_06.jpg"),
      message: 'I am watch tv.',
    },
    {
      id: 7,
      name: "Tony",
      image: require("../image_view/avtchat_07.jpg"),
      message: 'I am in the office.'
    },
    {
      id: 8,
      name: "Dustin",
      image: require("../image_view/avtchat_08.jpg"),
      message: 'I am in the office.'
    },
    {
      id: 9,
      name: "Max",
      image: require("../image_view/avtchat_09.jpg"),
      message: 'I am in the office.'
    },
    {
      id: 10,
      name: "Jon",
      image: require("../image_view/avtchat_10.jpg"),
      message: 'I am in the office.'
    },
    
  ]
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.data);
  const [listmess, setList] = useState([])
 
  useEffect(() =>{
    fetch('https://6571a1fed61ba6fcc01322aa.mockapi.io/user')
    .then(response => response.json())
    .then(data => {
      console.log("data");

      console.log(data);
      if(data){
        dispatch(readUser(data));
        setList(data);
      }
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
        return error;
    });
    // dispatch(readUser())
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ flex: 8 }}>
        <ScrollView
          nestedScrollEnabled
        >
          <FlatList
            data={listmess}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => { navigation.navigate('ChatDetail') }}
                >
                  {/* <View>
                    <Card.Title
                      title={item.name}
                      subtitle={item.message}
                      titleStyle={{ marginLeft: 15, fontSize: 18 }}
                      subtitleStyle={{ marginLeft: 15, fontSize: 15 }}
                      left={(props) =>
                        <Avatar.Image size={55} source={item.image}
                          style={{ marginRight: 10 }}

                        />

                      }
                      right={(props) =>

                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: 10 }}>
                          <Text style={{ fontSize: 15, marginBottom: 8 }}>4 phút</Text>
                          <Badge>3</Badge>
                        </View>
                      }
                    >
                    </Card.Title>
                    <Divider />
                  </View> */}
                  <Card>
                    <Card.Content>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image size={55} source={require(`../image_view/${item.image}`)} style={{ marginRight: 10 }} />
                        <View style={{ flex: 1 }}>
                          <Card.Title
                            title={item.name}
                            subtitle={item.message}
                            titleStyle={{ fontSize: 18 }}
                            subtitleStyle={{ fontSize: 15 }}
                            right={(props) =>
                              <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: 10 }}>
                                <Text style={{ fontSize: 15, marginBottom: 8 }}>4 phút</Text>
                                <Badge>3</Badge>
                              </View>
                            }
                          />
                        </View>
                      </View>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>

              );
            }}
          ></FlatList>

        </ScrollView>      </View>
    </View>
  )
}

export default ChatView
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
