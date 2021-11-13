import { Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';


const SavonPress = () => {
    return (
        <Box sx={{ textAlign: 'center', backgroundColor: '#fcefe1', py: 15 }} >
            <Typography variant="h6" gutterBottom component="div">
                SAVON. IN THE PRESS
            </Typography>
            <Typography variant="h5" gutterBottom component="div" sx={{ mx: 'auto', fontWeight: 700 }}>
                “Perfect soap with nice fragrance. And <br /> it contains natural fruit acids that help <br />smooth rough, dry skin and retain<br /> moisture.”
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
                    <Grid item xs={4} md={4}>
                        <img src="https://i.ibb.co/7Y5z1Bb/image.png" alt="" />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <img src="https://i.ibb.co/5rmMHt3/image.png" alt="" />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <img src="https://i.ibb.co/gvFS68Z/image.png" alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};



export default SavonPress;