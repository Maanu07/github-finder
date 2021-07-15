import React, { Fragment } from "react";
import Search from "../Search";
import Users from "../Users";

function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}

export default Home;
