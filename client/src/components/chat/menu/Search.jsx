import React from 'react';
import {Box, InputBase} from "@mui/material";
import {Search as SearchIcon} from "@mui/icons-material";
import {IconBox, InputField, SearchComponent, SearchWrapper} from "./Menu.element";

const Search = () => {
    return (
        <SearchComponent>
            <SearchWrapper>
                <IconBox>
                    <SearchIcon/>
                </IconBox>
                <Box>
                    <InputField
                       placeholder="Search or Start new Chat"
                    />
                </Box>
            </SearchWrapper>
        </SearchComponent>
    );
};

export default Search;