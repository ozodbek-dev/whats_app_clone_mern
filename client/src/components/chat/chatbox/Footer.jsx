import React, {useEffect} from 'react';
import {ClipIcon, FooterContainer, InputField, SearchField} from "./ChatBox.element";
import {EmojiEmotionsOutlined, Mic} from "@mui/icons-material";
import {uploadFile} from "../../../service/api";

const Footer = ({sendMsg, setMsg, msg, file, setFile, setUrl}) => {
    const onFileChange = e => {
        setFile(e.target.files[0])
        setMsg(e.target.files[0].name)
    }
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData()
                data.append("name", file.name);
                data.append("file", file);
                const res = await uploadFile(data)
                console.log(data)
                setUrl(res.data)
            }

        }
        getImage()
    }, [file])
    return (
        <FooterContainer>
            <EmojiEmotionsOutlined/>
            <label htmlFor="fileInput">
                <ClipIcon/>
            </label>
            <input
                type="file"
                id="fileInput"
                style={{display: "none"}}
                onChange={onFileChange}
            />
            <SearchField>
                <InputField
                    placeholder="Type a message"
                    onChange={e => setMsg(e.target.value)}
                    onKeyPress={(e) => sendMsg(e)}
                    value={msg}
                />
            </SearchField>
            <Mic/>
        </FooterContainer>

    );
};

export default Footer;