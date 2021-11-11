import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";


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


export default function AddProducts() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('https://savon-server-sider-api.herokuapp.com/soaps', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    alert('Succesfully added .');
                }
            })
    };


    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Soap Title"
                        id="custom-css-outlined-input"
                        type='text'
                        {...register("title", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Price"
                        id="custom-css-outlined-input"
                        type='number'
                        {...register("price", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Vendor"
                        id="custom-css-outlined-input"
                        type='text'
                        {...register("vendor", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Flavour"
                        id="custom-css-outlined-input"
                        type='text'
                        {...register("flavour", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Rating"
                        id="custom-css-outlined-input"
                        type='number'
                        defaultValue='3'
                        {...register("rating", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Description"
                        id="custom-css-outlined-input"
                        type='text'
                        {...register("description", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Img URL of the product"
                        id="custom-css-outlined-input"
                        type='text'
                        {...register("img", { required: true })} />
                </Grid>

            </Grid>

            <Button color="primary" variant="contained" sx={{ mt: 2, backgroundColor: 'hotpink' }} type='submit' >Add Package</Button>
        </Box>
    );
}
