import {Box, InputBase, styled, Typography} from "@mui/material";
import {AttachFile} from "@mui/icons-material";

//ChatBox styles
export const Component = styled(Box)`
  height: 75%;
`

//Chat header styles
export const Header = styled(Box)`
  height: 44px;
  padding: 8px 16px;
  background: #ededed;
  display: flex;
  align-items: center;
`
export const ProfileImage = styled('img')({
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: "50%"
})
export const Name = styled(Typography)`
  margin-left: 12px !important;
`
export const StatusStyles = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, .6)
`

export const RightContainer = styled(Box)`
  margin-left: auto;

  & > svg {
    padding: 8px;
    font-size: 24px;
    color: #000;

  }
`


//Messages styles;
export const MessagesWrapper = styled(Box)`
  background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  background-size: 50%;

`
export const MessagesComponent = styled(Box)`
  height: 83.3vh;
  overflow-y: scroll;
`;

export const MessagesContainer = styled(Box)`
  padding: 1px 80px;
`;

//Footer styles
export const StyledFooter = styled(Box)`
  min-height: 55px;
  height: 20vh;
  background: #ededed;
  // position: absolute;
  width: 100%;
  // bottom: 0
`;
export const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`
export const FooterContainer = styled(Box)`
  min-height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;

  & > svg {
    margin: 0 8px;
    cursor: pointer;
    color: #919191;
  }

`
export const SearchField = styled(Box)`
  background: #fff;
  border-radius: 18px;
  width: calc(94% - 100px)
`
export const ClipIcon = styled(AttachFile)`
  transform: rotate(45deg);
`
//Message styles
export const Own = styled(Box)`
  display: flex;
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  word-break: break-word;
`
export const MsgWrapper = styled(Box)`
  display: flex;
  background: #fff;
  max-width: 60%;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;
  word-break: break-word;`


export const Msg = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 5px;
`
export const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
`
export const MsgContainer = styled(Box)`
  padding: 1px 5vmax;
`

