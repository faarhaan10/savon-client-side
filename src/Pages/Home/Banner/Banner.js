import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '1rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        },
    };
    return (
        <div>
            {/* <Box sx={{ position: 'relative' }}>
                <img style={{ width: '100%', height: 'auto' }} src="https://i.ibb.co/9Zx1zYp/banner.jpg" alt="" />
            </Box> */}
            {/* <Box sx={{ textAlign: 'center', position: 'absolute', top: '45%', width: 1 }}> */}
            <Box sx={{ textAlign: 'center', backgroundImage: 'url(https://i.ibb.co/9Zx1zYp/banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', py: 25 }} >

                <ThemeProvider theme={theme}>
                    <Typography variant="h3">Natural Antioxidant</Typography>
                    <Typography variant="h3">Enriched Soap</Typography>
                </ThemeProvider>

                <Link to='/collections' style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ mr: 2 }}
                    > Shop All</Button>
                </Link>
            </Box>
        </div >
    );
};

export default Banner;