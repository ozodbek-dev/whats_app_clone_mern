import {Box, styled} from "@mui/material";
import {Header} from "../Messenger.element";

export const ChatHeader = styled(Header)`
     height:125px;
  background:#00a884 ;

`

export const Component = styled(Box) `
  display: flex;
  height: 100%;
`

export const dialogStyle = {
    height:"95%",
    width:"100%" ,
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none" ,
    overflow:"hidden",
    borderRadius:0
}

export const LeftComponent = styled(Box)`
    min-width: 450px;
`
export const RightComponent = styled(Box)`
 width: 100%;
  min-width: 300px;
  height:100% ;
  border-left:1px solid  rgba(0,0,0,.14);
`