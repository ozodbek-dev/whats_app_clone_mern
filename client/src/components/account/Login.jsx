import React from 'react';
import {Box, Dialog, ListItem} from '@mui/material'
import {Component, Container, dialogStyle, QrCode, StyledList, Title} from "./Login.element";
import {qrCodeImage} from "../../constants/data";
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from 'jwt-decode'
import {AccountState} from "../../context/AccountProvider";

const LoginDialog = () => {
    const {setAccount}  = AccountState();

    const onLoginSuccess = (res) => {
        const decoded_data = jwt_decode(res.credential)
        setAccount(decoded_data) ;
        
    }
    const onLoginError = err => {
        console.log(err.response.data.message)
    }
    return (
        <Dialog
            open={true}
            PaperProps={{sx: dialogStyle}}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To Use WhatsApp On your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WatsApp Web</ListItem>
                        <ListItem>3. Point your phone this screen to capture the code</ListItem>
                    </StyledList>

                </Container>
                <Box style={{position: "relative"}}>
                    <QrCode src={qrCodeImage} alt={'qr code'}/>
                    <Box style={{position: "absolute", top: "50%", transform: "translateX(25%)"}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;