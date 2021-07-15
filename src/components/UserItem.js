import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  let { login, avatar_url } = user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={"/user/" + login} className='btn btn-dark btn-sm my-1'>
          more
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

// previously in react before hooks, function compo were called stateless compo  and if a class compo does not have state then we can refactor it to a functional compo
