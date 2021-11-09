import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";


function NavigationDrawer() {

    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about">About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact">Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about">Faq</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2, color: pink[500] }}
            >
                <MenuIcon />
            </IconButton>
        </>
    );
}
export default NavigationDrawer;