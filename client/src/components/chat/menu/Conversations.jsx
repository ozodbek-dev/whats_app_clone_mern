import {useEffect, useState, Fragment} from 'react';
import {getUsers} from "../../../service/api";
import {Box} from "@mui/material";
import Conversation from "./Conversation";
import {AccountState} from "../../../context/AccountProvider";
import {StyledDivider} from "./Conversation.element";


const Conversations = ({text}) => {
    const {account} = AccountState()
    const [users, setUsers] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let {users} = await getUsers()
            const filteredData = () =>users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData)

        }

        fetchData()
    }, [text])

    return (
        <Box>
            {
                users.map(user => (
                    user.sub !== account.sub && <Fragment key={user.sub}>
                        <Conversation  user={user}/>
                        <StyledDivider/>
                    </Fragment>
                ))
            }
        </Box>
    );
};

export default Conversations;