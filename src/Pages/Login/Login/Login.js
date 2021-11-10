import { Alert, Button, Chip, CircularProgress, Divider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../../Shared/Navigation/Navigation/Navigation';


const Login = () => {
    const { user, handleGoogleLogin, handleEmailPasswordLogin, error, setError, isLoading } = useAuth();
    console.log(user)

    const [newUser, setNewUser] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        handleEmailPasswordLogin(newUser.email, newUser.password);
    }
    const handleBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newValue = { ...newUser };
        newValue[field] = value;
        setNewUser(newValue);
        setError('');

    }

    if (isLoading) { return <CircularProgress /> }
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

                autoComplete="off"
            >
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600, textAlign: 'left', color: 'hotpink' }}>
                    Sign in
                </Typography>


                <TextField onBlur={handleBlur} id="standard-basic" label="Email" variant="standard" sx={{ width: 1, mb: 2 }} type='email' name="email" defaultValue='' required />

                <TextField onBlur={handleBlur} id="standard-basic" label="Password" variant="standard" sx={{ width: 1, mb: 2 }} type='password' name='password' defaultValue='' required />

                <Button color="primary" variant="contained" sx={{ width: 1, mb: 2, backgroundColor: 'hotpink' }} type='submit' >Sign in</Button>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2, fontWeight: 600 }}>
                    <Divider>
                        <Chip style={{ color: 'hotpink' }} label="OR" />
                    </Divider>
                </Typography>

                {/* google sign in  */}
                <Button
                    onClick={handleGoogleLogin}
                    variant="outlined"
                    color="secondary"
                    sx={{ borderRadius: 5, width: 1 }}
                    style={{ position: 'relative' }}>
                    <img src="https://i.ibb.co/ZzHTC84/Group-573.png" alt="" style={{ width: '25px', left: 5, position: 'absolute' }} />
                    Continue with google
                </Button>
                {error && <Alert severity="warning">{error}</Alert>}
                <Typography
                    variant="p"
                    component="div"
                    sx={{ flexGrow: 1, mb: 2, fontWeight: 400 }}>
                    Don't Have an account?  <Link to='/register'
                        style={{ color: 'hotpink' }}
                    >Create an account</Link>
                </Typography>
            </Box>
        </div>
    );
};

export default Login;