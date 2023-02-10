import React from 'react';
import {Header, Name, ProfileImage, RightContainer, StatusStyles} from "./ChatBox.element";
import {defaultProfilePicture} from "../../../constants/data";
import {Box} from "@mui/material";
import {MoreVert, Search} from "@mui/icons-material";

const ChatHeader = ({person}) => {
    return (
        <Header>
             <ProfileImage src={person.picture?person.picture : defaultProfilePicture} alt="dp"/>
            <Box>
                <Name>{person.name}</Name>
                <StatusStyles>Online</StatusStyles>
            </Box>
            <RightContainer>
                <Search/>
                <MoreVert/>
            </RightContainer>
        </Header>
    );
};

export default ChatHeader;