import React, {useState} from 'react';
import {AccountState} from "../../../context/AccountProvider";
import {Component, Image, Wrapper} from "./Menu.element";
import {Message} from '@mui/icons-material'
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Header = () => {
    const {account} = AccountState();
    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setOpenDrawer(true)
    }
    return (
        <>
            <Component>
                <Image src={account.picture} alt="this"
                       onClick={() => toggleDrawer()}
                />

                <Wrapper>
                    <Message/>
                    <HeaderMenu
                        setOpenDrawer={setOpenDrawer}   
                    />
                </Wrapper>
                <InfoDrawer
                    open={openDrawer}
                    setOpen={setOpenDrawer}
                />
            </Component>
        </>

    );
};

export default Header;