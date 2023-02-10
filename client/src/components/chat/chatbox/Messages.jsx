import React, {useEffect, useState} from 'react';
import {MessagesComponent, MessagesWrapper,MsgContainer} from "./ChatBox.element";
import Footer from "./Footer";
import {AccountState} from "../../../context/AccountProvider";
import {getMessages, newMessage} from "../../../service/api";
import Message from "./Message";

const Messages = ({person, conversation}) => {
    const [msg, setMsg] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessageFlag,setNewMessageFlag] = useState(false)
    const {account} = AccountState()
    const sendMsg = async (e) => {
        if (msg === '') {
            return
        }
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: "text",
                text: msg
            }

            await newMessage(message)
            setMsg('')
            setNewMessageFlag(prev=>!prev)
        }

    }


    useEffect(() => {
        const getMessageDetails = async () => {
            const {messages} = await getMessages(conversation._id)
            setMessages(messages)
        }

        conversation._id && getMessageDetails()
    }, [person._id, conversation._id, newMessageFlag])

    return (
        <MessagesWrapper>
            <MessagesComponent>
                {
                    messages && messages.map(msg => (
                        <MsgContainer key={msg._id}>
                            <Message msg={msg}/>
                        </MsgContainer>
                    ))
                }
            </MessagesComponent>
            <Footer
                sendMsg={sendMsg}
                setMsg={setMsg}
                msg={msg}
            />
        </MessagesWrapper>
    );
};

export default Messages;