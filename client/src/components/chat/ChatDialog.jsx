import React from 'react';
import {Dialog} from "@mui/material";
import {Component, dialogStyle, LeftComponent, RightComponent} from "./ChatDialog.element";


// components
import Menu from './menu/Menu'
import EmptyChat from "./emptyChat/EmptyChat";
import ChatBox from "./chatbox/ChatBox";
import {AccountState} from "../../context/AccountProvider";

const ChatDialog = () => {
    const {person} = AccountState();
    return (
        <Dialog
            open={true}
            hideBackdrop={true}
            PaperProps={{sx: dialogStyle}}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    {
                        !person ? <EmptyChat/> : <ChatBox/>
                    }
                </RightComponent>
            </Component>
        </Dialog>
    );
};

export default ChatDialog;