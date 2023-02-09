import React from 'react';
import {AccountState} from "../../../context/AccountProvider";
//components
import Header from './Header'
import {Box} from "@mui/material";
import Search from "./Search";

const Menu = () => {



    return (
        <>
            <Box>
                <Header/>
                <Search/>
            </Box>

        </>
    );
};

export default Menu;