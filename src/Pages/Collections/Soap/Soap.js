import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material';

const Soap = () => {
    return (
        <Grid item xs={4} sm={4} md={3}>
            <Paper elevation={3}>
                <Card sx={{ textAlign: 'center' }}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="253"
                            image="https://cdn.shopify.com/s/files/1/0433/5232/6300/products/soap-33_2000x.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                                Shea Butter Soap
                            </Typography>
                            <Rating name="read-only" value='4' readOnly />
                            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                $ 260.00 <span style={{ textDecoration: 'line-through', color: 'gray' }}>$369</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        </Grid>
    );
};

export default Soap;