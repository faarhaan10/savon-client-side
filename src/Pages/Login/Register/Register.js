import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation/Navigation';

const Register = () => {
    const [newUser, setNewUser] = useState({});
    const { setUser, error, setError, isLoading, setIsLoading, handleEmailPasswordRegister } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_URI = location.state?.from || '/';

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, password2, name } = newUser;
        if ((password + password2).length < 12) {
            setError('Your password must be at least 6 characters long.');
            return;
        }
        if (password !== password2) {
            setError('Your password did not match');
            return;
        }
        const loggedInUser = { email, displayName: name };
        setUser(loggedInUser);
        handleEmailPasswordRegister(email, password, name, history, redirect_URI);
    }
    const handleOnBlur = e => {
        setError('');
        const field = e.target.name;
        const value = e.target.value;

        const newValue = { ...newUser };
        newValue[field] = value;
        setNewUser(newValue);

    }

    return (
        <div>
            <Navigation></Navigation>
            <Box
                onSubmit={handleSubmit}
                component="form"
                sx={{
                    width: { md: '46ch', xs: 'auto' },
                    mx: 'auto',
                    border: { md: 1, xs: 0 },
                    borderRadius: 1,
                    px: 5,
                    py: 2,
                    my: 5
                }}
                spacing={2}

                autoComplete="off"
            >
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600, textAlign: 'left', color: 'hotpink' }}>
                    Register
                </Typography>

                <TextField onBlur={handleOnBlur} required
                    id="outlined-required" label="Full Name" variant="standard" sx={{ width: 1, mb: 2 }} type='text' name="name" defaultValue='' />

                <TextField onBlur={handleOnBlur} id="standard-basic" label="Email" variant="standard" sx={{ width: 1, mb: 2 }} type='email' name="email" defaultValue='' required />

                <TextField onBlur={handleOnBlur} id="standard-basic" label="Password" variant="standard" sx={{ width: 1, mb: 2 }} type='password' name='password' defaultValue='' required />

                <TextField onBlur={handleOnBlur} id="standard-basic" label="Confirm Password" variant="standard"
                    sx={{
                        width: 1,
                        mb: 2
                    }}
                    type='password' name='password2' defaultValue='' required />

                <Button color="primary" variant="contained" sx={{ width: 1, mb: 2, backgroundColor: 'hotpink' }} type='submit' >Register</Button>

                <Typography variant="p" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 400 }}>
                    Already Have an account? <Link to='/login' style={{ color: 'hotpink' }}>Login</Link>
                </Typography>
                {error && <Alert severity="warning">{error}</Alert>}
            </Box>
        </div>
    );
};

export default Register;