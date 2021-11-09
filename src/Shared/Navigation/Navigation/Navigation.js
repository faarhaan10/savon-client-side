import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import { Link } from "react-router-dom";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

// const useStyles = makeStyles((theme) => ({
//     navlinks: {
//         marginLeft: theme.spacing(5),
//         display: "flex",
//     },
//     logo: {
//         flexGrow: "1",
//         cursor: "pointer",
//     },
//     link: {
//         textDecoration: "none",
//         color: "white",
//         fontSize: "20px",
//         marginLeft: theme.spacing(20),
//         "&:hover": {
//             color: "yellow",
//             borderBottom: "1px solid white",
//         },
//     },
// }));

function Navigation() {
    // const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4">
                    Navbar

                </Typography>
                {isMobile ? (
                    <NavigationDrawer />
                ) : (
                    <div>
                        <Link to="/" >
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link>
                        <Link to="/faq">
                            FAQ
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
export default Navigation;