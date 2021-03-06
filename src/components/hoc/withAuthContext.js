import React from "react";
import AuthContext from "../../context/Auth";

const withAuthContext = (WrappedComponent) => {
  return function WithAuthContext(props) {
    return (
      <AuthContext.Consumer>
        {(context) => {
          return <WrappedComponent {...props} auth={context}/>;
        }}
      </AuthContext.Consumer>
    );
  };
};

export default withAuthContext;