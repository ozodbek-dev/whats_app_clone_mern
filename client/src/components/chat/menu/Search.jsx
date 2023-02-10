import React from 'react';
import {Box, InputBase} from "@mui/material";
import {Search as SearchIcon} from "@mui/icons-material";
import {IconBox, InputField, SearchComponent, SearchWrapper} from "./Menu.element";

const Search = ({setText}) => {
    return (
        <SearchComponent>
            <SearchWrapper>
                <IconBox>
                    <SearchIcon/>
                </IconBox>
                <Box>
                    <InputField
                       placeholder="Search or Start new Chat"
                       onChange={e=>setText(e.target.value)}
                    />
                </Box>
            </SearchWrapper>
        </SearchComponent>
    );
};

export default Search;