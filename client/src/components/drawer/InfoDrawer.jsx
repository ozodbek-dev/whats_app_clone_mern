import React from 'react';
import {Box, Drawer, Typography} from "@mui/material";
import {drawerStyle, Header, Component, Text} from "./InfoDrawer.element";
import {ArrowBack} from "@mui/icons-material";
import Profile from "./Profile";


const InfoDrawer = ({open, setOpen}) => {

    const closeHandler = ()=>{
        setOpen(false)
    }
    return (
        <Drawer
            open={open}
            onClose={closeHandler}
            PaperProps={{sx: drawerStyle}}
            style={{zIndex:1500}}
        >
             <Header>
                 <ArrowBack onClick={closeHandler}/>
                  <Text>Profile</Text>
             </Header>
            <Component>
                <Profile/>
            </Component>
        </Drawer>
    );
};

export default InfoDrawer;