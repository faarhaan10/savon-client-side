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
                <Typography variant="h4" component="h5" sx={{ fontSize: { md: 40, sm: 35, xs: 25 } }}>
                    <NavLink to='/' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>Savon.</NavLink>
                </Typography>

                {/* reguler users route  */}
                {!isMobile && <Stack
                    direction="row"
                    spacing={2}
                >
                    <NavLink to='/' style={{ textDecoration: 'none' }}> <Button color="secondary">Home</Button></NavLink>
                    <NavLink to='/collections' style={{ textDecoration: 'none' }}> <Button color="secondary">Collections</Button></NavLink>
                    {user.email && <NavLink to='/dashboard' style={{ textDecoration: 'none' }}> <Button color="secondary">Dashboard</Button></NavLink>}
                </Stack>
                }

                {/* login info  */}
                {!isMobile && <Stack direction="row" spacing={2}
                    style={{ alignItems: 'center' }}>
                    {user.email ? <Typography
                        color="hotpink" >{user?.displayName?.toLocaleUpperCase() || 'User'}</Typography>
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