import { Avatar, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// const useStyles = makeStyles(() => ({
//     link: {
//         textDecoration: "none",
//         color: "blue",
//         fontSize: "20px",
//     },
//     icon: {
//         color: "white"
//     }
// }));

function NavigationDrawer() {
    // const classes = useStyles();
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
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <Avatar />
            </IconButton>
        </>
    );
}
export default NavigationDrawer;