import {Box, Divider, styled, Typography} from "@mui/material";

export const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100%;
  height:100%!important;
`

export const Container = styled(Box)`
padding:0 200px;
  img{
    width: 30vmax;
    margin-top: 7vmax;
  }
`

export const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d
`
export const Subtitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  margin: 25px 0 10px 0;
  font-weight: 400;
  font-family: inherit;
`

export const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`