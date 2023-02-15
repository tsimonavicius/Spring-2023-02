import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const MenuItem = ({label, icon, link}) => {

    const navigate = useNavigate();

    return (
        <ListItemButton onClick={() => navigate(link)}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>
    )
}

export default MenuItem