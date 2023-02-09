import React from 'react';
import {emptyChatImage} from "../../../constants/data";
import {Box, Typography} from "@mui/material";
import {Component, Container, StyledDivider, Title} from "./EmptyChat.element";

const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <img src={emptyChatImage}/>
                <Title>WhatsApp Web</Title  >
                <Typography>Now send and receive messages without keeping your phone online.</Typography>

                <Typography>
                    Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                </Typography>
                <StyledDivider/>
            </Container>
        </Component>
    );
};

export default EmptyChat;