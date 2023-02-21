import * as React from 'react';
import {Home, Info} from "@mui/icons-material";
import AppleIcon from '@mui/icons-material/Apple';
import MenuItem from "./MenuItem";

export const AppMainMenu = (
    <>
        <MenuItem label="Home" link="/" icon={<Home/>}/>
        <MenuItem label="Products" link="/products" icon={<AppleIcon/>}/>
        <MenuItem label="About" link="/about" icon={<Info/>}/>
    </>
);
