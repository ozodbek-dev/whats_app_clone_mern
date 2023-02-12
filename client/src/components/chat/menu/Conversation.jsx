import {Box, Typography} from "@mui/material";
import {ConversationComponent, Image} from "./Conversation.element";
import {AccountState} from "../../../context/AccountProvider";
import {getConversation, setConversation} from "../../../service/api";
import {useEffect, useState} from "react";
import {formatDate} from "../../../utils/common-utils";

const Conversation = ({user}) => {

    const {setPerson, account, activeUsers, newMessageFlag} = AccountState();
    const [msg, setMsg] = useState()
    const getUser = async () => {
        setPerson(user)
        await setConversation({
            senderId: account.sub, receiverId: user.sub
        })
    }
    useEffect(() => {
        const getConverSationDetails = async () => {
            const data = await getConversation({
                senderId: account.sub, receiverId: user.sub
            });
            setMsg({
                text: data?.message, timestamp: data?.updatedAt
            })
        }
        getConverSationDetails()
    }, [newMessageFlag])
    return (<ConversationComponent onClick={getUser}>
        <Box>
            <Image src={user.picture} alt="dp"/>
        </Box>
        <Box>
            <Typography>
                {user.name}<br/>({activeUsers?.find(u => u.sub === user.sub) ? "Online" : "Offline"})
            </Typography>
            {
              msg &&  msg.text && <Typography>
                    {formatDate(msg.createdAt)}
                </Typography>
            }
        </Box>
        {
            msg &&
            <Box>
                <Typography>
                    {
                        msg.text
                    }
                </Typography>
            </Box>
        }
    </ConversationComponent>);
};

export default Conversation;