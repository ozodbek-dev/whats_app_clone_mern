import React, {useState} from 'react';
import {MoreVert} from "@mui/icons-material";
import {Menu} from "@mui/material";
import {MenuOption} from "./Menu.element";

const HeaderMenu = ({setOpenDrawer}) => {
    const [open, setOpen] = useState(null)
    const handleClose = (e) => {
        setOpen(null)
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    const handleProfileClick = ()=>{
        handleClose()
        setOpenDrawer(true)
    }
    return (
        <>
            <MoreVert onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted={true}
                getContentAnchorE1={null}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuOption onClick={handleProfileClick}

                >Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>
            </Menu>
        </>
    );
};

export default HeaderMenu;