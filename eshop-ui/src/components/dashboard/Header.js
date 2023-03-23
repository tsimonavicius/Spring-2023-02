import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import * as React from "react";
import {AccountCircle, Login, Logout} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {i18n} from "../../index";
import {Translation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {userLoggedOut} from "../../store/slices/userSlice";

const Header = ({drawerWidth, open, toggleDrawer}) => {
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        console.log("pakeitem kalba");
    };

    const navigate = useNavigate();
    const totalQuantity = useSelector((state) => state.totalQuantity);
    const user = useSelector(({user}) => user?.userDto);
    const dispatch = useDispatch()

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({theme, open}) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const loginAndSignUpButtons = !user && (
        <>
            <Button
                variant="contained"
                startIcon={<Login/>}
                onClick={() => navigate("/login")}
                color="secondary"
                sx={{
                    ml: 1,
                }}
            >
                Login
            </Button>
            <Button
                variant="contained"
                startIcon={<AccountCircle/>}
                onClick={() => navigate("/signup")}
                color="secondary"
                sx={{
                    ml: 1,
                }}
            >
                Sign Up
            </Button>
        </>
    )

    const logout = () => {
        dispatch(userLoggedOut())
        navigate("/")
    }

    const userDataComponent = user && (
        <>
            <Typography component="span" variant="subtitle1" color="inherit" noWrap>
                {user.name + ' ' + user.surname}
            </Typography>
            <Button
                variant="contained"
                startIcon={<Logout/>}
                onClick={logout}
                color="secondary"
                sx={{
                    ml: 1,
                }}
            >
                Logout
            </Button>
        </>
    )

    return (
        <AppBar position="absolute" open={open}>
            <Toolbar
                sx={{
                    pr: "24px", // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: "36px",
                        ...(open && {display: "none"}),
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                    E-Shop
                </Typography>
                <IconButton color="inherit" onClick={() => navigate("/cart")}>
                    <Badge badgeContent={totalQuantity} color="secondary">
                        <ShoppingBasketIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                {
                    loginAndSignUpButtons || userDataComponent
                }
                <Translation>
                    {(t, {i18n}) => (
                        <>
                            <select value={t("language") === "en" ? "en" : "lt"}
                                    style={{minHeight: "35px", marginLeft: "7px"}} onChange={changeLanguage}>
                                <option value="en">English</option>
                                <option value="lt">Lietuvių</option>
                            </select>
                        </>
                    )}
                </Translation>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
