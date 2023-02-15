import * as React from 'react';
import {Home, Info} from "@mui/icons-material";
import MenuItem from "./MenuItem";

export const AppMainMenu = (
    <>
        <MenuItem label="Home" link="/" icon={<Home/>}/>
        <MenuItem label="About" link="/about" icon={<Info/>}/>
    </>
);
