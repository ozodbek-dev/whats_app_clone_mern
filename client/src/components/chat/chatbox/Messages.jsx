import React, {useEffect, useRef, useState} from 'react';
import {MessagesComponent, MessagesWrapper, MsgContainer} from "./ChatBox.element";
import Footer from "./Footer";
import {AccountState} from "../../../context/AccountProvider";
import {getMessages, newMessage} from "../../../service/api";
import Message from "./Message";

const Messages = ({person, conversation}) => {
    const {socket,newMessageFlag, setNewMessageFlag} = AccountState()
    const [file, setFile] = useState(undefined)
    const [msg, setMsg] = useState('')
    const [url, setUrl] = useState('')
    const [messages, setMessages] = useState([])

    const [incomingMsg, setIncomingMsg] = useState(null)
    const {account} = AccountState()
    const scrollRef = useRef(null)

    useEffect(() => {
        socket.current.on("getMessage", data => {
            setIncomingMsg({
                ...data,
                createdAt: Date.now()
            })
        })
    })
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
                console.log(file)
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: "file",
                    text: file.name,
                    file_url: url
                }
            }
            console.log(message)
            socket.current.emit("send message", message)
            setMsg('')
            await newMessage(message)

            file && setFile(undefined)

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

    useEffect(() => {
        scrollRef.current?.scrollIntoView({transition: 'smooth'})
    }, [messages])

    useEffect(() => {
        incomingMsg && conversation?.members?.includes(incomingMsg.senderId) && setMessages(prev => [...prev, incomingMsg])
    }, [incomingMsg, conversation])
    return (
        <MessagesWrapper>
            <MessagesComponent>
                {
                    messages && messages.map(msg => (
                        <MsgContainer ref={scrollRef} key={msg._id}>
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