import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'hotpink',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});





const Billing = ({ soapId, soapTitle }) => {
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        const date = new Date().toLocaleDateString();
        const status = 'pending';
        const newPurchase = { soapId, date, status, ...data };
        console.log(newPurchase)

        axios.post('https://savon-server-sider-api.herokuapp.com/customers', newPurchase)
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Order placed Succesfully');
                }
            })
    };
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 600 }}>
                Billing Information
            </Typography>
            {user.email && <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Name"
                        id="custom-css-outlined-input"
                        type='text'
                        defaultValue={user.displayName}
                        {...register("name", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="email"
                        type='email'
                        defaultValue={user?.email}
                        id="custom-css-outlined-input"
                        {...register("email", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Product"
                        type='text'
                        defaultValue={soapTitle}
                        id="custom-css-outlined-input"
                        {...register("soapTitle", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Address 1"
                        id="custom-css-outlined-input"
                        type='textarea'
                        {...register("address1")} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Address 2"
                        id="custom-css-outlined-input"
                        type='textarea'
                        {...register("address2")} />
                </Grid>


            </Grid>}

            <Button color="secondary" variant="contained" sx={{ mt: 2, backgroundColor: 'hotpink' }} type='submit' >Add Package</Button>
        </Box>
    );
};

export default Billing;