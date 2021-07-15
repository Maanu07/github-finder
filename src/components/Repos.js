import React, { Fragment } from "react";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return (
    <Fragment>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </Fragment>
  );
}

export default Repos;
