import React from 'react';
import {Box, Typography} from "@mui/material";
import {ConversationComponent,Image} from "./Conversation.element";
import {AccountState} from "../../../context/AccountProvider";
import {setConversation} from "../../../service/api";

const Conversation = ({user}) => {

    const{setPerson,account} =  AccountState();

    const getUser = async()=>{
        setPerson(user)
        await setConversation({senderId:account.sub,receiverId:user.sub})
    }
    return (
        <ConversationComponent onClick={getUser}>
            <Box>
                <Image src={user.picture} alt="dp"/>
            </Box>
            <Box>
                 <Typography>
                     {user.name}
                 </Typography>
            </Box>
        </ConversationComponent>
    );
};

export default Conversation;