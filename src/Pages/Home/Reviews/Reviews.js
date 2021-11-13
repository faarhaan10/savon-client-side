import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, Container, Rating, Typography } from '@mui/material';
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://savon-server-sider-api.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, my: 5 }} >
            <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 500, textAlign: 'center', fontSize: { md: 40, sm: 30, xs: 25 } }}>
                Customer Reviews
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        reviews.map(rvw => <Grid
                            key={rvw._id}
                            item
                            xs={4}
                            sm={4}
                            md={4}>
                            <Paper elevation={3}>
                                <Card sx={{ textAlign: 'center', height: 150 }}>
                                    <CardActionArea >
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {rvw.name}
                                            </Typography>
                                            <Rating name="read-only" value={parseInt(rvw.rating)} readOnly />
                                            <Typography variant="body2" color="text.secondary">
                                                <q> {rvw.review.slice(0, 80)}...</q>


                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Paper>
                        </Grid>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;