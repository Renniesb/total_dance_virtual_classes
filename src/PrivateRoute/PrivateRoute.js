import React from 'react';
import {Route, Redirect} from "react-router-dom";

//this component displays the profile child if the user is authenticated if no it redirects to login
const PrivateRoute = ({children, isAuthenticated, ...rest}) => {
    return (
        <Route
          {...rest}
          render={() =>
            isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",

                }}
              />
            )
          }
        />
    );
};

export default PrivateRoute;