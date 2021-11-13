import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Soap = ({ soap }) => {
    const { _id, title, price, rating, img, description } = soap;

    return (
        <Grid item xs={4} sm={4} md={3} >
            <Link to={`/placeorder/${_id}`} style={{ textDecoration: 'none' }}>
                <Paper elevation={3}>
                    <Card sx={{ textAlign: 'center' }}>
                        <CardActionArea >
                            <CardMedia
                                component="img"
                                height="253"
                                image={img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                    {title}
                                </Typography>
                                <Rating name="read-only" defaultValue={parseInt(rating)} readOnly />
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                    $ {price}.00 <span style={{ textDecoration: 'line-through', color: 'gray' }}>${parseInt(price) + 15}</span>
                                </Typography>
                                <Typography gutterBottom variant="p" component="div" >
                                    {description.slice(0, 100)}...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </Link>
        </Grid>
    );
};

export default Soap;