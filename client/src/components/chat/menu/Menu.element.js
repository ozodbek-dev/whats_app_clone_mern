import {Box, InputBase, MenuItem, styled} from "@mui/material";

export const   Component = styled(Box)`
  display: flex;
      align-items: center;
     height: 44px;
  background: #ededed;
  padding: 8px 16px;
`

export const Image = styled('img')({
    height:40,
     width:40,
    borderRadius:"50%"
})

export const Wrapper = styled(Box)`
     margin-left: auto;
  & >*{
    margin-left: 2px;
    padding:8px;
    color:black;
    
  }
  & :first-child{
    font-size: 22px;
    margin-right: 8px;
  }
`



//Search Component styles
export const SearchComponent = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
`

export const SearchWrapper = styled(Box)`
    background-color:#f0f2f5  ;
  position: relative;
margin: 0 13px;
  width: 100%;
  border-radius: 10px;
`

export const IconBox = styled(Box)`
   position: absolute;
  height: 100%;
  padding:6px 8px;
  color:#919191;
`

export const InputField = styled(InputBase)`
  width: 100%;
  heigh: 15px;
  font-size: 14px;
  padding-left: 65px;
`

export const MenuOption = styled(MenuItem)`
    font-size: 14px;
  padding: 15px 60px 5px 24px;
  color:#4a4a4a;
`