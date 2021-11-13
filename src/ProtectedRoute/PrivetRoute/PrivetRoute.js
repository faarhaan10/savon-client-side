import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const { isLoading, user } = useAuth();
    console.log(isLoading, user)


    if (isLoading) {
        return <h4 sx={{ flexGrow: 1, my: 5, textAlign: 'center' }} >
            Loading
        </h4>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;