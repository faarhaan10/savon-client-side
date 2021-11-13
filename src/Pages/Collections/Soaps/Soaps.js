import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, CircularProgress } from '@mui/material';
import Soap from '../Soap/Soap';
import Navigation from '../../../Shared/Navigation/Navigation/Navigation';
import useAuth from '../../../hooks/useAuth';

const Soaps = () => {
    const [soaps, setSoaps] = React.useState([]);
    const { isLoading, setIsLoading } = useAuth();


    React.useEffect(() => {
        setIsLoading(true);
        fetch('https://savon-server-sider-api.herokuapp.com/soaps')
            .then(res => res.json())
            .then(data => setSoaps(data))
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <Box sx={{ flexGrow: 1, my: 5 }} >
            <CircularProgress />
        </Box>
    }

    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1, my: 5 }} >
                <Typography gutterBottom variant="h3" component="div" sx={{ fontWeight: 500, textAlign: 'center', fontSize: { md: 40, sm: 30, xs: 25 } }}>
                    Popular Products
                </Typography>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            soaps.map(soap => <Soap
                                key={soap._id}
                                soap={soap}
                            ></Soap>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Soaps;