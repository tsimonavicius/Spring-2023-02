import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

const MenuItem = ({label, icon, link, matchSubPaths = false}) => {

    const navigate = useNavigate();
    const location = useLocation()

    return (
        <ListItemButton selected={matchSubPaths ? location.pathname.startsWith(link) : location.pathname === link}
                        onClick={() => navigate(link)}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>
    )
}

MenuItem.propTypes = {
    label: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.object,
    matchSubPaths: PropTypes.bool
};

export default MenuItem