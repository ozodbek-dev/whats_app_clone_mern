import React, {useState} from 'react';
import {FooterContainer, InputField, SearchField, StyledFooter,ClipIcon} from "./ChatBox.element";
import { EmojiEmotionsOutlined, Mic} from "@mui/icons-material";

const Footer = ({sendMsg,setMsg,msg}) => {
    return (
            <FooterContainer>
                <EmojiEmotionsOutlined/>
                <ClipIcon/>
                <SearchField>
                    <InputField
                        placeholder="Type a message"
                        onChange={e=>setMsg(e.target.value)}
                        onKeyPress={(e)=>sendMsg(e)}
                        value={msg}
                    />
                </SearchField>
                <Mic/>
            </FooterContainer>
        
    );
};

export default Footer;