import * as React from 'react';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({component, isAuthenticated, ...rest}) => {
    const routeComponent = (props) => (
        isAuthenticated
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/'}}/>
    );

    return <Route {...rest} render={routeComponent}/>;
};
