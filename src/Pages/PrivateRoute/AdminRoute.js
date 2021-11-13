import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin.admin ? (
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

export default AdminRoute;