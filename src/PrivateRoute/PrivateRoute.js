import React from 'react';
import {Route, Redirect} from "react-router-dom";

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
}

export default PrivateRoute;