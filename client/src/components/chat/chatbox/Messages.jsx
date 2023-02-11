import React, {useEffect, useState} from 'react';
import {MessagesComponent, MessagesWrapper, MsgContainer} from "./ChatBox.element";
import Footer from "./Footer";
import {AccountState} from "../../../context/AccountProvider";
import {getMessages, newMessage} from "../../../service/api";
import Message from "./Message";

const Messages = ({person, conversation}) => {
    const [file, setFile] = useState()
    const [msg, setMsg] = useState('')
    const [url, setUrl] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessageFlag, setNewMessageFlag] = useState(false)
    const {account} = AccountState()
    const sendMsg = async (e) => {
        if (msg === '') {
            return
        }
        const code = e.keyCode || e.which;
        let message = {}
        if (code === 13) {
            if (!file && !url) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "text",
                    text: msg
                }
            } else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "file",
                    text: file.name,
                    file_url: url
                }
            }

            await newMessage(message)
            setMsg('')
            setNewMessageFlag(prev => !prev)
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
                file={file}
                setFile={setFile}
                setUrl={setUrl}
            />
        </MessagesWrapper>
    );
};

export default Messages;