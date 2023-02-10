import React, {useEffect, useState} from 'react';
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import {Component} from "./ChatBox.element";
import {AccountState} from "../../../context/AccountProvider";
import {getConversation} from "../../../service/api";
import conversations from "../menu/Conversations";


const ChatBox = () => {
    const {person,account} = AccountState();
    const [conversation,setConversation] = useState();

    useEffect(()=>{
        const getConversationDetails = async()=>{
           const data =  await getConversation({senderId:account.sub,receiverId:person.sub});
           setConversation(data.conversation)
        }
        getConversationDetails()
    },[person.sub, account.sub])
    return (
        <Component>
            <ChatHeader person = {person}/>
            {conversation && person && <Messages person={person} conversation={conversation} />}
        </Component>
    );
};

export default ChatBox;