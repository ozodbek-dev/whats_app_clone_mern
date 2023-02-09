import {Box, styled, Typography} from "@mui/material";

export const drawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "30%",
    boxShadow: "none"
}
export const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #fff;
  display: flex;

  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }


`

export const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`

export const Text = styled(Typography)`
  font-size: 18px;
`

// Profile Styles
export const Image = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: "cover" ,
    borderRadius: "50%"
})

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 25px;

  
  div {
    width: 200px;
    height: 200px;
    borderRadius: "50%";
    overflow: hidden;
  }
`

export const BoxWrapper = styled(Box)`
  background: white;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.08);
  & :first-child{
    font-size: 13px;
     color:#009688;
  }
  & :last-child{
    margin:14px 0;
    color:#4a4a4a;
    
  }
`

export const DescriptionContainer = styled(Typography)`
   padding: 15px 20px 28px 30px;
   &>p{
     font-size: 13px;
     color: #8696a0;
   }
`