import React from 'react';
import {Toolbar} from "@mui/material";
import {Component, Header} from "./Messenger.element";
import LoginDialog from "./account/Login";
import {AccountState} from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
import {ChatHeader} from "./chat/ChatDialog.element";

const Messenger = () => {
    const {account} = AccountState();

    return (<Component>
            {account ? <>
                <ChatHeader>
                    <Toolbar>

                    </Toolbar>
                </ChatHeader>
                <ChatDialog/>
            </> : <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <LoginDialog/>
            </>}

        </Component>);
};

export default Messenger;