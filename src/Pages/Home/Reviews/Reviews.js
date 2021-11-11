import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';

const Reviews = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 5 }} >
            <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 500, textAlign: 'center', fontSize: { md: 40, sm: 30, xs: 25 } }}>
                Customer Reviews
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={4} md={4}>
                        <Paper elevation={3}>
                            <Card sx={{ textAlign: 'center' }}>
                                <CardActionArea >
                                    <Avatar sx={{ mx: 'auto', width: 112, height: 112, mt: 2 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <q> Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica</q>


                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper elevation={3}>
                            <Card sx={{ textAlign: 'center' }}>
                                <CardActionArea >
                                    <Avatar sx={{ mx: 'auto', width: 112, height: 112, mt: 2 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <q> Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica</q>


                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper elevation={3}>
                            <Card sx={{ textAlign: 'center' }}>
                                <CardActionArea >
                                    <Avatar sx={{ mx: 'auto', width: 112, height: 112, mt: 2 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <q> Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica</q>


                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;