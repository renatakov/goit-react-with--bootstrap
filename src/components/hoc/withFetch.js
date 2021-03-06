import React, { Component } from "react";

const withFetch = (url) => WrappedComponent => {
  return class withFetch extends Component {
    state = {
      data: [],
      load: false,
      error: null,
    };
    componentDidMount() {
      this.setState({ load: true });
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return this.setState({ data });
        })
        .catch((error) => {
          return this.setState({ error });
        })

        .finally(() => {
          return this.setState({ load: false });
        });
    }
    render() {
      return(
        <WrappedComponent {...this.props} />
      )
    }
  };
};

export default withFetch;