import React from 'react';
import {Box, Dialog} from "@mui/material";
import {Component, dialogStyle, LeftComponent, RightComponent} from "./ChatDialog.element";


// components
import Menu from './menu/Menu'
import EmptyChat from "./emptyChat/EmptyChat";

const ChatDialog = () => {
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
                      <EmptyChat/>
                </RightComponent>
            </Component>
        </Dialog>
    );
};

export default ChatDialog;