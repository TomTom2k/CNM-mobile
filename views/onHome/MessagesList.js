import { View, Text, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import Message from './Message';

const MessagesList = () => {
    const data = [
        {
            user: 0,
            time: "12:00",
            message: "Hello, how are you?"
        },
        {
            user: 1,
            time: "12:01",
            message: "I am good, thank you."
        },
        {
            user: 0,
            time: "12:02",
            message: "Where are you now?"
        },
        {
            user: 1,
            time: "12:03",
            message: "I am in the office."
        },
        {
            user: 0,
            time: "12:02",
            message: "Where are you now?"
        },
        {
            user: 1,
            time: "12:03",
            message: "I am in the office."
        }

    ]
    const [messages, setMessages] = useState(data);

    const user = useRef(0);
    const scroolView = useRef();
    return (
        <View>
            <ScrollView style = {{backgroundColor: "#fff"}}
                ref={ref => scroolView.current = ref}
                onContentChange={() => {
                    scroolView.current.scrollToEnd({ animated: true });
                
                }}
            >
                {messages.map((message, index) => (
                    <Message key={index} time={message.time} isLeft={message.user !== user.current} message={message.message} />
                ))}
            </ScrollView>
        </View>
    )
}

export default MessagesList