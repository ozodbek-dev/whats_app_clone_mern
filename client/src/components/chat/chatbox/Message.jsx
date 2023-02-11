import React from 'react';
import {FileMsg, FileTime, Msg, MsgWrapper, Own, StyledImage, Time} from "./ChatBox.element";
import {formatDate, donwloadFile} from "../../../utils/common-utils";
import {AccountState} from "../../../context/AccountProvider";
import {fileTypesList} from "../../../constants/data";
import {GetApp} from "@mui/icons-material";
import {Box} from "@mui/material";

const Message = ({msg}) => {
    const {account} = AccountState()
    return (<>
            {account.sub === msg.senderId ? <Own>
                {
                    msg.type === 'file' ? <FileContent msg={msg}/> :
                        <>
                            <Msg>
                                {msg.text}
                            </Msg>
                            <Time>
                                {formatDate(msg.createdAt)}
                            </Time>
                        </>
                }

            </Own> : <MsgWrapper>
                {
                    msg.type === 'file' ? <FileContent msg={msg}/> :
                        <>
                            <Msg>
                                {msg.text}
                            </Msg>
                            <Time>
                                {formatDate(msg.createdAt)}
                            </Time>
                        </>
                }
            </MsgWrapper>}

        </>

    );
};


const FileContent = ({msg}) => {
    console.log(msg)
    let file;

    if (msg && msg.file_url) {
        file = fileTypesList.find(i => msg.file_url.includes(i.type));
    }

    return (<>
            {

                file ? (
                    <FileMsg>
                        <img src={file.img} alt="img"/>
                        <Box style={{position:"relative"}}>
                            <Msg>
                                {msg.text}
                            </Msg>
                            <FileTime>
                                <GetApp
                                    onClick={e=>donwloadFile(e,msg.file_url)}
                                />
                                 <span>
                                    {formatDate(msg.createdAt)}
                                </span>

                                
                            </FileTime>
                        </Box>
                    </FileMsg>
                ) : (
                    <StyledImage>
                        <img src={msg.file_url} alt="img"/>
                        <Box style={{position:"relative"}}>
                            <Msg>
                                {msg.text}
                            </Msg>
                            <FileTime>
                                <GetApp
                                    onClick={e=>donwloadFile(e,msg.file_url)}
                                />
                                <span>
                                    {formatDate(msg.createdAt)}
                                </span>

                            </FileTime>

                        </Box>
                    </StyledImage>
                )
            }
        </>

    )
}


export default Message;