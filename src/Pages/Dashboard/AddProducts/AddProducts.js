import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth'
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


export default function AddProducts() {
    const [productImg, setProductImage] = React.useState('');
    const { uploadImage } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const img = productImg;
        const newData = { img, ...data };
        axios.post('https://savon-server-sider-api.herokuapp.com/soaps', newData)
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Soap added Succesfully');
                }
            });
        reset();
    };

    const handleImgUpload = (img, setImg) => {
        uploadImage(img)
            .then(res => {
                setImg(res.data.data.url);
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
                        type='text'
                        {...register("title", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Price"
                        type='number'
                        {...register("price", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Vendor"
                        type='text'
                        {...register("vendor", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Flavour"
                        type='text'
                        {...register("flavour", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Rating"
                        type='number'
                        defaultValue='3'
                        {...register("rating", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Description"
                        type='text'
                        {...register("description", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        accept="image/png, image/jpg, image/jpeg"
                        type="file"
                        required
                        onChange={e => handleImgUpload(e.target.files[0], setProductImage)}
                    />
                </Grid>

            </Grid>

            {productImg.length ? <Button color="primary" variant="contained" sx={{ mt: 2, backgroundColor: 'hotpink' }} type='submit'>Add Package</Button>
                :
                <Button color="primary" variant="contained" sx={{ mt: 2, backgroundColor: 'hotpink' }} type='submit' disabled>Add Package</Button>}
        </Box>
    );
}
