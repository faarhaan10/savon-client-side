import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Container, Rating, Typography } from '@mui/material';

const Products = () => {
    const [soaps, setSoaps] = React.useState([]);
    const size = 6;
    React.useEffect(() => {
        fetch(`https://savon-server-sider-api.herokuapp.com/soaps?size=${size}`)
            .then(res => res.json())
            .then(data => setSoaps(data))
    }, []);

    return (
        <Box sx={{ flexGrow: 1, my: 5 }} >
            <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 500, textAlign: 'center', fontSize: { md: 40, sm: 30, xs: 25 } }}>
                Popular Products
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        soaps.map(soap => <Grid item xs={4} sm={4} md={4}
                            key={soap._id}
                        >
                            <Paper elevation={3}>
                                <Card sx={{ textAlign: 'center' }}>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            height="253"
                                            image={soap.img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                                                {soap.title}
                                            </Typography>
                                            <Rating name="read-only" defaultValue={soap.rating} readOnly />
                                            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                                $ {soap.price}.00 <span style={{ textDecoration: 'line-through', color: 'gray' }}>${parseInt(soap.price) + 15}</span>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Paper>
                        </Grid>
                        )}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;