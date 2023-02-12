import {Fragment, useEffect, useState} from 'react';
import {getUsers} from "../../../service/api";
import {Box} from "@mui/material";
import Conversation from "./Conversation";
import {AccountState} from "../../../context/AccountProvider";
import {StyledDivider} from "./Conversation.element";


const Conversations = ({text,}) => {
    const {account, socket, setActiveUsers} = AccountState()
    const [users, setUsers] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let {users} = await getUsers()
            const filteredData = () => users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData)

        }

        fetchData()
    }, [text])

    useEffect(() => {
        socket.current.emit("addUser",account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
            console.log(users)
        })
    }, [account])

    return (
        <Box>
            {
                users.map(user => (
                    user.sub !== account.sub && <Fragment key={user.sub}>
                        <Conversation user={user}/>
                        <StyledDivider/>
                    </Fragment>
                ))
            }
        </Box>
    );
};

export default Conversations;