import React, { Fragment, Component } from "react";
import spinner from "../assests/spinner.gif";

class Loader extends Component {
  render() {
    return (
      <Fragment>
        <img src={spinner} alt='Loading...' style={loaderStyle} />
      </Fragment>
    );
  }
}

const loaderStyle = {
  display: "block",
  width: "200px",
  margin: "auto",
};

export default Loader;
