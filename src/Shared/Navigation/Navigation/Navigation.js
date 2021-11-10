import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
    Stack,
    Button
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import { Box } from "@mui/system";


function Navigation() {
    // const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <CssBaseline />
            <Toolbar style={{ justifyContent: "space-between", margin: '0 5%' }}>
                {/* responsive toggleer  */}
                {isMobile && <NavigationDrawer />}
                {/* reguler users route  */}
                {!isMobile && <Stack direction="row" spacing={2}>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Home</Button></NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Collections</Button></NavLink>
                    <NavLink to='/dashboard' style={{ textDecoration: 'none' }}> <Button color="secondary">Dashboard</Button></NavLink>
                </Stack>
                }

                <Typography variant="h4" component="h5">
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>Savon.</NavLink>
                </Typography>
                {/* admin and login info  */}
                {!isMobile && <Stack direction="row" spacing={2}>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Admin</Button></NavLink>
                    <Typography
                    ><Button color="secondary" disabled>name</Button></Typography>

                    <NavLink to='/login' style={{ textDecoration: 'none' }}> <Button color="secondary">Login</Button></NavLink>
                </Stack>
                }
            </Toolbar>

        </AppBar>
    );
}
export default Navigation;