import {createContext, useContext, useEffect, useRef, useState} from "react";
import {io} from 'socket.io-client'
export const AccountContext = createContext(null);


const AccountProvider = ({children}) => {
    const [account, setAccount] = useState()
    const [person, setPerson] = useState()
    const [activeUsers, setActiveUsers] = useState()
    const [newMessageFlag, setNewMessageFlag] = useState(false)
    const socket = useRef();
    useEffect(()=>{
        socket.current = io("ws://localhost:9000")
    },[])
    return (
        <AccountContext.Provider value={{
            account, setAccount,
            person, setPerson,
            activeUsers, setActiveUsers     ,
            socket,
            newMessageFlag, setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export const AccountState = () => {
    return useContext(AccountContext)
}

export default AccountProvider