import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Container, Rating, Typography } from '@mui/material';

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }} >
            <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 500, textAlign: 'center', fontSize: { md: 40, sm: 30, xs: 25 } }}>
                Popular Products
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={4} sm={4} md={4}>
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
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;