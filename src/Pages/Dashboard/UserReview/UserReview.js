import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

const UserReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        if (data.rating < 0 || data.rating > 5) {
            alert('Rating must be 0 to 5.');
            return;
        }

        axios.post('https://savon-server-sider-api.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Review added Succesfully');
                }
            });
        reset();
    }
    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ flexGrow: 1 }}
        >
            <Container sx={{
                fontWeight: 500,
                fontSize: { md: 40, sm: 30, xs: 25 },
                borderRadius: 5,
                boxShadow: 5,
                py: 3
            }}>
                <Typography
                    variant="h3"
                    component="div"

                    sx={{
                        fontSize: { md: 40, sm: 30, xs: 25 },
                        mb: 5
                    }}
                >
                    Give Review
                </Typography>
                <TextField
                    label="Full Name"
                    size="small"
                    sx={{ mb: 2, mr: 2 }}
                    type="text"
                    defaultValue={user.displayName}
                    {...register("name", { required: true })}
                />
                <TextField
                    label="Write Review"
                    size="small"
                    sx={{ mb: 2, mr: 2 }}
                    type="textarea"
                    {...register("review", { required: true })}
                />
                <TextField
                    label="Give Rating (0-5)"
                    size="small"
                    sx={{ mb: 2, mr: 2 }}
                    type="number"
                    {...register("rating", { required: true })}
                />
                <br />
                <Button type='submit' variant="contained" endIcon={<SaveIcon />}>
                    Save
                </Button>
            </Container>
        </Box>
    );
};

export default UserReview;