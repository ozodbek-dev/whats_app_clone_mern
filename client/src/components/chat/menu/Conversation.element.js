import {Box, Divider, styled} from '@mui/material'
export const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`
export const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
`


 //conversation component styles
export const ConversationComponent = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer
`
export const Image = styled('img')({
    width:50,
    height:50,
    borderRadius:"50%",
    padding:"0 14px" ,
    objectFit:"cover"
})