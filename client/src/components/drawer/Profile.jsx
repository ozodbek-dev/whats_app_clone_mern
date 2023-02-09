import React from 'react';
import {Box, Typography} from "@mui/material";
import {AccountState} from "../../context/AccountProvider";
import {BoxWrapper, DescriptionContainer, Image, ImageContainer} from "./InfoDrawer.element";


const Profile = () => {
    const {account} = AccountState()
    return (
        <>
            <ImageContainer>
                <div>
                    <Image src={account.picture} alt="dp"/>
                </div>
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>

            </BoxWrapper>
            <Box>
                <DescriptionContainer>
                    This is not your username or pin. thiis name will be  visible to your WatsApp contacts.
                </DescriptionContainer>
            </Box>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat!</Typography>
            </BoxWrapper>
        </>
    );
};

export default Profile;