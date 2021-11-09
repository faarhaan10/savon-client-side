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
                {isMobile && <NavigationDrawer />}
                {!isMobile && <Stack direction="row" spacing={2}>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Home</Button></NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Collections</Button></NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Dashboard</Button></NavLink>
                </Stack>
                }
                <Typography variant="h4" component="h5">
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>Savon.</NavLink>
                </Typography>
                {!isMobile && <Stack direction="row" spacing={2}>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Admin</Button></NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Name</Button></NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Icon</Button></NavLink>
                </Stack>
                }
            </Toolbar>

        </AppBar>
    );
}
export default Navigation;