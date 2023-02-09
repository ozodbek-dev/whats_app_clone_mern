import {Box, List, styled, Typography} from '@mui/material'

export const dialogStyle = {
    height:"96%",
    marginTop:"12%",
    width:"60%" ,
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none" ,
    overflow:"hidden",
}

export const Component = styled(Box)`
  display: flex;
`

export const Container = styled(Box)`
padding: 56px 0 56px 56px;
`
export const QrCode = styled('img')({
    height:254,
    width:264,
    margin: "50px 0 0 50px"
})

export const Title = styled(Typography)`
  font-size: 26px;
  color:#525252;
   font-weight: 300;
  font-family: inherit;
  margin-bottom:25px ;
`

export const StyledList = styled(List)`
  &>li{
    padding:0;
    margin-top:1rem ;
    font-size: 18px;
    line-height: 28px;
    color:#4a4a4a;
    
  }
`