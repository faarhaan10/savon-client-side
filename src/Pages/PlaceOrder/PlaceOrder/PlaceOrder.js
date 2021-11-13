import { Button, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router";
import Navigation from '../../../Shared/Navigation/Navigation/Navigation';
import Billing from '../Billing/Billing';

const PlaceOrder = () => {
    const [soap, setSoap] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        // setIsLoading(true);
        fetch(`https://savon-server-sider-api.herokuapp.com/soaps/${id}`)
            .then(res => res.json())
            .then(data => setSoap(data))
        // setIsLoading(false);
    }, [id]);
    console.log(soap);

    return (
        <div>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1, my: 5 }} >
                <Container sx={{
                    fontWeight: 500,
                    textAlign: 'center',
                    fontSize: { md: 40, sm: 30, xs: 25 },
                    borderRadius: 5,
                    boxShadow: 5,
                    py: 3
                }}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            fontSize: { md: 40, sm: 30, xs: 25 }
                        }}
                    >
                        Place Order
                    </Typography>
                </Container>
                {
                    soap.title ? <Box>
                        <Container sx={{
                            borderRadius: 5,
                            boxShadow: 5,
                            py: 3,
                            my: 4
                        }}>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 8 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Grid item xs={4} md={4}>
                                    <img src={soap.img} alt='' style={{ width: '100%' }} />
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 600 }}>
                                        {soap.title}
                                    </Typography>

                                    <Rating name="read-only" defaultValue={parseInt(soap.rating)} readOnly />

                                    <Typography variant="body2" gutterBottom>
                                        {soap.title} {soap.description}
                                    </Typography>

                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                        Price: $ {soap.price}.00 <span style={{ textDecoration: 'line-through', color: 'gray' }}>${parseInt(soap.price) + 15}</span>
                                    </Typography>

                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 500 }}>
                                        Flavour: <span sx={{ fontWeight: 400 }}>{soap.flavour} </span>
                                    </Typography>

                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 500 }}>
                                        Vendor: <span sx={{ fontWeight: 400 }}>{soap.vendor}</span>
                                    </Typography>

                                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 500 }}>
                                        Type: <span sx={{ fontWeight: 400 }}>Soap</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                        <Divider />
                        <Container sx={{
                            borderRadius: 5,
                            boxShadow: 5,
                            py: 3,
                            my: 4
                        }}>
                            <Billing soapId={soap._id} />
                        </Container>

                    </Box>
                        :
                        <Box sx={{ flexGrow: 1, my: 5, textAlign: 'center' }} >
                            <CircularProgress />
                        </Box>
                }
            </Box>
        </div>
    );
};

export default PlaceOrder;