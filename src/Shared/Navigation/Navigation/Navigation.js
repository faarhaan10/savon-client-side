import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    useTheme,
    useMediaQuery,
    Stack,
    Button
} from "@mui/material";
import { NavLink } from "react-router-dom";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";
import useAuth from "../../../hooks/useAuth";


const Navigation = () => {
    const { user, handleLogOut } = useAuth();


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
            <CssBaseline />
            <Toolbar style={{ justifyContent: "space-between", margin: '0 5%' }}>
                {/* responsive toggleer  */}
                {isMobile && <NavigationDrawer />}
                <Typography variant="h4" component="h5">
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>Savon.</NavLink>
                </Typography>
                {/* reguler users route  */}
                {!isMobile && <Stack direction="row" spacing={2}>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Home</Button></NavLink>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Collections</Button></NavLink>
                    <NavLink to='/dashboard' style={{ textDecoration: 'none' }}> <Button color="secondary">Dashboard</Button></NavLink>
                </Stack>
                }

                {/* admin and login info  */}
                {!isMobile && <Stack direction="row" spacing={2}
                    style={{ alignItems: 'center' }}>
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Admin</Button></NavLink>
                    {user.email ? <Typography
                        color="hotpink" >{user?.displayName.toLocaleUpperCase()}</Typography>
                        :
                        <Typography></Typography>
                    }

                    {!user.email ? <NavLink
                        to='/login'
                        style={{ textDecoration: 'none' }}> <Button color="secondary">Login</Button>
                    </NavLink>
                        :
                        <Button
                            onClick={handleLogOut}
                            color="secondary">
                            Log Out
                        </Button>}
                </Stack>
                }
            </Toolbar>

        </AppBar>
    );
}
export default Navigation;