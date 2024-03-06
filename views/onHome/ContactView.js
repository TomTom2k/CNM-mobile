import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Badge, Card, Divider, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const ContactView = () => {
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
  const [selectedTab, setSelectedTab] = useState('Bạn bè');
  const sortedList = list.sort((a, b) => a.name.localeCompare(b.name));
  const addGroup = (props) => <MaterialIcons name="group-add" size={25}  color="#1d92fe" />;

  return (
    <ScrollView
      nestedScrollEnabled
    >
      <View style={styles.container}>
        <View style={{ height: 75, flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              height: 40, width: "50%", alignItems: "center", marginTop: 10,
              borderBottomWidth: selectedTab === 'Bạn bè' ? 2 : 0,
              borderBottomColor: selectedTab === 'Bạn bè' ? '#006af5' : 'transparent'
            }}
            onPress={() => setSelectedTab('Bạn bè')}
          >
            <Text>Bạn bè</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40, width: "50%", alignItems: "center", marginTop: 10,

              borderBottomWidth: selectedTab === 'Nhóm' ? 2 : 0,
              borderBottomColor: selectedTab === 'Nhóm' ? '#006af5' : 'transparent'
            }}
            onPress={() => setSelectedTab('Nhóm')}
          >
            <Text>Nhóm</Text>
          </TouchableOpacity>
        </View>
        <View >
          {selectedTab === 'Bạn bè' ? (
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "column" }}>
                <Card.Title
                  title="Lời mời kết bạn"
                  titleStyle={{ marginLeft: 15, fontSize: 18, fontWeight: '600' }}
                  left={(props) =>
                    <View style={{ backgroundColor: '#1a79fa', padding: 5, borderRadius: 5, alignItems: "center" }}>
                      <Ionicons name="people-sharp" size={24} color="white" />
                    </View>
                  }
                />
                <Card.Title
                  title="Lời mời kết bạn"
                  subtitle="Các liên hệ có dùng Zalo"
                  titleStyle={{ marginLeft: 10, fontSize: 18, fontWeight: '600' }}
                  left={(props) =>
                    <View style={{ backgroundColor: '#1a79fa', padding: 5, borderRadius: 5, alignItems: "center" }}>
                      <AntDesign name="contacts" size={24} color="white" />
                    </View>
                  }
                  subtitleStyle={{ marginLeft: 10, fontSize: 14 }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Button icon="" mode="elevated" onPress={() => console.log('Pressed')}
                  style={{ height: 40, width: 120 }}
                >
                  Tất cả 172
                </Button>
              </View>
              <View style={{ flex: 8 }}>

                <FlatList
                  data={sortedList}
                  renderItem={({ item, index }) => {
                    return (
                      <View>
                        {index === 0 || item.name.charAt(0) !== sortedList[index - 1].name.charAt(0) ? (
                          // Render header if first item or first character of name is different from previous
                          <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>{item.name.charAt(0)}</Text>
                          </View>
                        ) : null}
    
                        <Card.Title
                          title={item.name}
                          left={(props) => <Avatar.Image size={55} source={item.image} style={{ marginRight: 10 }} />}
                          right={(props) => (
                            <View style={{ flexDirection: "row" }}>
                              <Feather name="phone" size={24} color="black" />
                              <Feather name="video" size={24} color="black" />
                            </View>
                          )}
                        />
                      </View>
                    );
                  }}
                />


              </View>

            </View>
          ) : (
            <View>
              <View style = {{flexDirection: "row", alignItems:"center"}}>
              <Avatar.Icon size={70} icon={addGroup} style = {{backgroundColor:"#e9f5ff"}} />
              <Text>Tạo nhóm mới</Text>
              </View>
              <View

              ></View>
            </View>

          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default ContactView

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})